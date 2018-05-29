if !System.get_env("EXERCISM_TEST_EXAMPLES") do
  Code.load_file("hello_world.exs", __DIR__)
end

ExUnit.start()
ExUnit.configure(trace: true)

defmodule HelloWorldTest do
  use ExUnit.Case

  test "says 'Hello, World!'" do
    #given
    print = "Hello, World!"
    #when
    when_Says_Print = HelloWorld.hello()
    #then
    assert when_Says_Print == print
  end
end
