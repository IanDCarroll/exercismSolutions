pub fn hello(name: Option<&str>) -> String {
    let n = match name { Some(name) => name, None => "World", };
    format!("Hello, {}!", n)
}

/* This is a line-condensed version of the script I paired with 
   Krystal @kammitama5 at the Rust LA meetup with major help and 
   credit going to Herman Radtke @hjr3 and Matt Kraai. 
   Thanks for the great meetup!

   After playing around a little bit, I can say that unlike 
   Python, whitespace is less of a deal for propper syntax, 
   like in C or JS. 
   As I learn more I'll reevaluate that hypothesis.

   Todo: Go through each element of this syntax and comment on 
   what it is and what it does. 
   Comment on the nature of rust as a whole, 
   and how this function traverses its waters.
   Start reading the rust book and doing the exercises therein.
 */

