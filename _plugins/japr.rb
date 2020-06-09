require 'japr'

class JavaScriptCompressor < JAPR::Compressor
  require 'closure-compiler'

  def self.filetype
    '.js'
  end

  def compress
    closure = Closure::Compiler.new(:language_in => 'ECMASCRIPT6')
    return closure.compile(@content)
  end
end
