pub fn hello(name: Option<&str>) -> String {
    let n = match name { Some(name) => name, None => "World", };
    format!("Hello, {}!", n)
}

/* This is a line-condensed version of the script I paired with @kammitama5 
   at the Rust LA meetup. It was paired between the two of us with major 
   help and credit going to @hjr3 and many other more seasoned rustaceans. 
   Thanks for the great meetupi!

   After playing around a little bit, I can say that unlike python, 
   whitespace is less of a deal for propper syntax. Like C or JS. 
   As I learn more I'll reevaluate that hypothesis.

   Todo: Go through each element of this syntax and comment on what it is 
   and what it does. 
   Comment on the nature of rust as a whole, 
   and how this function traverses its waters.
   Start reading the rust book and doing the exercises therein.
 */
