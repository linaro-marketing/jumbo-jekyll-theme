---
title: Darknet Overview
date: 2018-11-23 11:00:00
description: >-
    A little note from the theme author
image:
    path: /assets/images/content/background-image2.png
    featured: true
author: kyle
category: Getting Started
tags: [jekyll, note, theme, jumbo-jekyll-theme, Getting Started]
---

# Darknet Overview

"Darknet is an open source neural network framework written in C and CUDA. It is fast, easy to install, and supports CPU and GPU computation." - [pjreddie/darknet](https://pjreddie.com/darknet/)

This blog post will describe the process of retraining Darknet, an object detection software, into a qunatized model using an open source autonomous vehicle dataset.

Reasons this is necessary:

1. A machine with limited resources generally struggles to run object detection, thus creating a qunatized model will increase efficiency on these systems such as a 96Boards platform.

2. Autoware, a fully open source autonomous vehicle software stack, relies mainly on darknet for object detection; however, the detection for cars and signs relies mainly on the kitti dataset. The kitti dataset is not a dataset expressly  designated for Autonomous vehicles.

By using a dataset which is specialised in autonomous vehicles, accuracy for tasks such as driving at night and in adverse conditions will increase tremendously.

## System Details:
This process can be done on any system which [darknet](https://pjreddie.com/darknet/) supports. For this blog the following was used:

   - 64 bit computer running Ubuntu 18.04
   - Intel Core i7-8750H CPU
## References:
   - [Darknet](https://pjreddie.com/darknet/)
   - The [Berkley Deep Drive Dataset](http://bdd-data.berkeley.edu/)
   - The [bdd-data toolkit](https://github.com/ucbdrive/bdd-data.git)
   - A [Guide to Retraining Darknet YoloV2](https://timebutt.github.io/static/how-to-train-yolov2-to-detect-custom-objects/)

# Berkley DeepDrive Dataset Overview
The Berlkley DeepDrive Dataset (BDD dataset) produced by Fisher Yu is one of the largest and most diverese video datasets for autonomous vehicles. The dataset consists of 100,000 videos, each of which is about 40 seconds long, 720p, 30 fps, and also contains GPS/IMU information recorded from cell-phones.

This dataset contains videos from diverse locations around the United States, in a wide range of weather conditions and settings such as, rainy, overcast, sunny, at night, and during the day. Most importantly for my purpouses this dataset also includes hundreds of thousands of still frames extracted from these videos along with bounding boxes and labels for objects, segmentation, lane lines, etc.

# Building Darknet

Darknet can be built with several optional settings such as GPU (default off), CUDNN (default off), OPENCV (default off), OpenMP (default off), and Debug (default off). If you wish to change the defaults they are accessible in the Makefile. To download and build darknet do the following

```
$ git clone https://github.com/pjreddie/darknet
$ cd darknet && make
```

# Downloading the Berkley DeepDrive Dataset

In order to access the BDD dataset an account needs to be created on the [bdd-data website](http://bdd-data.berkeley.edu/wad-2018.html).

For the purposes of this blog the Images, and Labels portion of the BDD dataset were downloaded, i.e. bdd100k_images.zip and bdd100k_labels_release.zip.

The BDD dataset has its own nomenclature, and thus is not instantly compatible with the format of darknet, thus some processing needs to be done to extract the relevant information for retraining.


# Reformatting the BDD-dataset

For retraining to take place, darknet requires a .txt file corresponding to each image, and within the txt file there needs to be a line for each object to be detected in the image with the following format:
```
<object class #> <x><y><width><height>
```
x,y,width, and height being relative to the size of the image. All bdd-dataset images are 1280/720 pixels. - x and y need to be the center of each bounding box.

The BDD-Dataset provides a label.json file which has different attributes for each image. In order to convert the json file into files formated for darknet we need to extract the following information from the json file.
```
   "name": (image name, number before .jpg)
   "labels" [ (describes):
       "catagory" (car, bike, etc.)
       "box 2d" {x1, y1, x2, y2} (absolute x,y coordinates, not relative to width and height of image.)
```

**More information about the BDD-Dataset Json format can be found [here](https://github.com/ucbdrive/bdd-data/blob/master/doc/format.md)**

In order to process the BDD Dataset and format it for darknets use: the Catagory must be extracted and given a number which will correspond to the .names file, in this case bdd.names (created later). Each new line with an object on it (i.e. bike, car etc.) is assigned a number starting with 0.

"box 2d" also needs to be processed so that it corresponds to darknets way of getting bounding boxes. This is done by getting the relative center point of each bounding box, compared to the image size 1280/720.

## BDD toolset

The [bdd-data toolkit](https://github.com/ucbdrive/bdd-data) is supporting code for the BDD100k data and provides several useful functions for processing and analysing the data. This toolkit will provides some tools to label and analyse the bdd-dataset, and the following piece of code is based off of this.

In order to reformat BDD datasets labels for darknet, create a new file called BerkleyLabel.py. Add the following code which has been modified from the bdd-data toolkit's label2det.py program:

```
$ vim BerkLabel.py
```
Add the Following in BerkLabel.py:

```python
import argparse
import json


def parse_args():
    """Use argparse to get command line arguments."""
    parser = argparse.ArgumentParser()
    parser.add_argument('label_path', help='path to the label dir')
    parser.add_argument('det_path', help='path to output detection file')
    args = parser.parse_args()

    return args


def label2det(frames):


    for frame in frames:
        iname = frame['name']
        fname = iname[:-4]
#Creates, opens, and adds to a txt file with the name of each image.jpg
        f = open("data/" + fname + ".txt","w+")
#For each sub label of each image, get the box2d variable
#Get the relative center point compared to the image size 1280/720
        for label in frame['labels']:
            if 'box2d' not in label:
                continue
            xy = label['box2d']
            if xy['x1'] >= xy['x2'] or xy['y1'] >= xy['y2']:
                continue
            X = xy['x1']/1280
            Y = xy['y1']/720
            MX = ((xy['x1'] + xy['x2']) / 2)/1280
            MY = ((xy['y1'] + xy['y2']) / 2)/720
            W = xy['x2']/1280
            H = xy['y2']/720
            if X > W or Y > H:
                continue
            lbl = -1
#provide a number corresponding to the category of sub label for darknet format.
            if(label['category'] == "bike"):
                lbl = 0
            if(label['category'] == "bus"):
                lbl = 1
            if(label['category'] == "car"):
                lbl = 2
            if(label['category'] == "motor"):
                lbl = 3
            if(label['category'] == "person"):
                lbl = 4
            if(label['category'] == "rider"):
                lbl = 5
            if(label['category'] == "traffic light"):
                lbl = 6
            if(label['category'] == "traffic sign"):
                lbl = 7
            if(label['category'] == "train"):
                lbl = 8
            if(label['category'] == "truck"):
                lbl = 9
            f.write(repr(lbl) + " " + repr(MX) + " " + repr(MY) + " " + repr(W-X) + " " + repr(H-Y) + '\n')

def convert_labels(label_path, det_path):
    frames = json.load(open(label_path, 'r'))
    det = label2det(frames)
    json.dump(det, open(det_path, 'w'), indent=4, separators=(',', ': '))


def main():
    args = parse_args()
    convert_labels(args.label_path, args.det_path)


if __name__ == '__main__':
    main()
```
***

Next the following is executed.
```
$ python3 -m bdd_data/show_labels.py --image-dir bdd100k/images/100k/train \
    -l bdd100k/labels/bdd100k_labels_images_train.json
```
When running this command, if pointed to the image folder, it will create a .txt file corresponding to each .jpg, along with the information from the berkley deep drive json data, formatted in the correct darknet format.

Now we move the data directory which contains the .jpg and corresponding .txt files to a new directory called obj within the darknet/data directory.

```
mv data ~/darknet/data/obj
```


# Retraining Darknet
The following section is from a [guide](https://timebutt.github.io/static/how-to-train-yolov2-to-detect-custom-objects/) on training YoloV2 to detect custom objects, and was used as the basis for retrain the tiny darknet dataset.

A python script created in that guide (process.py in the guide, we'll call it BddProcess.py) will be used to create two text files, train.txt and test.txt which are the training and validation text files respectively. These contain the relative path to each .jpg and .txt file which will be used to train and test the darknet cfg file.

Create a file called BddProcess.py and add the following.

***
```python
import glob, os

# Current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Directory where the data will reside, relative to 'darknet.exe'
path_data = 'data/obj/'

# Percentage of images to be used for the test set
percentage_test = 10;

# Create and/or truncate train.txt and test.txt
file_train = open('train.txt', 'w')
file_test = open('test.txt', 'w')

# Populate train.txt and test.txt
counter = 1
index_test = round(100 / percentage_test)
for pathAndFilename in glob.iglob(os.path.join(current_dir, "*.jpg")):
    title, ext = os.path.splitext(os.path.basename(pathAndFilename))

    if counter == index_test:
        counter = 1
        file_test.write(path_data + title + '.jpg' + "\n")
    else:
        file_train.write(path_data + title + '.jpg' + "\n")
        counter = counter + 1
```
***

## Preparing Yolo Configuration Files

Next we will need to create three files, a .data file, a .name file, and a .cfg file.

First create a file called bdd.data with the following inside:

```
classes = 10
train = train.txt
valid = test.txt
names = bdd.names
backup = backup/
```

This references the 10 classes which we will be training from the Bdd dataset, the training text file, the validation test.txt file, the list of names, as well as a location where backups of our classifier will be saved.

Next lets create a names text file bdd.names with the different bdd dataset catagories in the following order:

```
bike
bus
car
motor
person
rider
traffic light
traffic sign
train
truck
```

These names correspond to the ordering 0-9 given in the BerkLabel.py python script.

Now we need the .cfg file. In order to train a quantized classifier the yolov3-tiny.cfg file was used within the darknet/cfg directory. Open this file and make sure the batch and subdivision options under training are uncommented, and the batch and subdivisions under testing are commented. When testing it is important that the reverse is true and the batch and subdivisions variables are set to 1.

```
# Testing
#batch=1
#subdivisions=1
# Training
 batch=64
 subdivisions=2
```

Finally we need to download the tiny weights from darknets tiny darknet implementation:

```
$ cd darknet
$ wget https://pjreddie.com/media/files/tiny.weights
```

## Training

Now we can begin training! To do this navigate to the darknet directory and execute the following command:

```
$ ./darknet detector train cfg/bdd.data cfg/yolov3-tiny.cfg tiny.weights
```

This will begin the training process. Every 100 iterations will be saved in darknet/backups for the first 1000 iterations when the process has started, and afterwards every 1000 will be saved to a .backup file which can be used to resume the training process at any time.
