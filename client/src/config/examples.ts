
const rTabs = (str:string) => str.trim().replace(/^ {4}/gm, '');

interface Example {
  [key: number]: string;
}

const examples:Example = {
  75: rTabs(`
    #include <stdio.h>
    int main() {
      // printf() displays the string inside quotation
      printf("Hello, World!");
      return 0;
    }
  `),
  76: rTabs(`
    #include <iostream>
    #include <vector>

    std::vector<int> find_prime_factors(int n)
    {
      std::vector<int> result;
      for (int i = 2; i <= n; i++)
      {
        while (n % i == 0)
        {
          result.push_back(i);
          n = n/i;
        }
      }
      return result;
    }

    int main()
    {
      int n;
      std::cout << "Enter number\n";
      std::cin >> n;
      std::vector<int> prime_factors;
      prime_factors = find_prime_factors(n);
      std::cout << "Prime Factors of " << n << ":\n";
      for (int i = 0; i < prime_factors.size(); i++)
      {
        std::cout << prime_factors[i] << " ";
      }
      std::cout << "\n";
    }
  `),
  51: rTabs(`
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    namespace VS
    {
      class Program
      {
        static void Main(string[] args)
        {
          ProcessStartInfo si = new ProcessStartInfo();
          float load= 3.2e02f;

          si.FileName = @"tools\\node.exe";
          si.Arguments = "tools\\simpleserver.js";

          Process.Start(si);
        }
      }
    }
  `),
  4: rTabs(`
    @keyframes flip {
      from {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
        animation-timing-function: ease-out;
      }

      40% {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
          rotate3d(0, 1, 0, -190deg);
        animation-timing-function: ease-out;
      }

      50% {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
          rotate3d(0, 1, 0, -170deg);
        animation-timing-function: ease-in;
      }

      80% {
        transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
          rotate3d(0, 1, 0, 0deg);
        animation-timing-function: ease-in;
      }

      to {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        animation-timing-function: ease-in;
      }
    }

    .animated.flip {
      backface-visibility: visible;
      animation-name: flip;
    }
  `),
  5: rTabs(`
    FROM ubuntu:18.04
    COPY . /app
    RUN make /app
    CMD python /app/app.py
  `),
  95: rTabs(`
    package main

    import (
      "fmt"
      "time"
    )

    func readword(ch chan string) {
      fmt.Println("Type a word, then hit Enter.")
      var word string
      fmt.Scanf("%s", &word)
      ch <- word
    }

    func timeout(t chan bool) {
      time.Sleep(5 * time.Second)
      t <- false
    }

    func main() {
      t := make(chan bool)
      go timeout(t)

      ch := make(chan string)
      go readword(ch)

      select {
      case word := <-ch:
          fmt.Println("Received", word)
      case <-t:
          fmt.Println("Timeout.")
      }
    }
  `),
  7: rTabs(`
    type Query {
      me: User!
      searchForLocation(byGPS: GPSInput, byAddress: AddressInput): LocationPagingConnection
    }

    type Mutation {
      addLocation(location: LocationInput): Location
      addReview(review: ReviewInput): Review
      addFavorite(locationId: ID!): Location
    }
  `),
  8: rTabs(`
    <html>
      <head>
        <title>HTML Sample</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <style type="text/css">
          h1 {
            color: #CCA3A3;
          }
        </style>
        <script type="text/javascript">
          alert("I am a sample...");
        </script>
      </head>
      <body>
        <h1>Heading No.1</h1>
        <input disabled type="button" value="Click me" />
      </body>
    </html>
  `),
  91: rTabs(`
    import java.util.ArrayList;
    import org.junit.Test;

    public class Example {
      @Test 
      public void method() {
        org.junit.Assert.assertTrue( "isEmpty", new ArrayList<Integer>().isEmpty());
      }
    
      @Test(timeout=100) public void infinity() {
        while(true);
      }
     }
  `),
  93: rTabs(`
    const num1 = 5;
    const num2 = 3;
    
    // add two numbers
    const sum = num1 + num2;
    
    // display the sum
    console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);  
  `),
  11: rTabs(`
    {
      "port": 8080,
      "exclude_from_auth": [
        "/login",
        "/check_token",
        "/battles:get",
        "/team"
      ],
      "db": {
        "default_data": {
          "battles": [],
          "active_battle_id": null,
          "admin": {},
          "secret": "",
          "active_tokens": []
        },
        "path": ".db.json"
      }
    }
  `),
  78: rTabs(`
    class MutableStack<E>(vararg items: E) {              // 1

      private val elements = items.toMutableList()

      fun push(element: E) = elements.add(element)        // 2

      fun peek(): E = elements.last()                     // 3

      fun pop(): E = elements.removeAt(elements.size - 1)

      fun isEmpty() = elements.isEmpty()

      fun size() = elements.size

      override fun toString() = "MutableStack($\{elements.joinToString()\})"
    }
  `),
  13: rTabs(`
    CREATE TABLE shop (
      article INT(4) UNSIGNED ZEROFILL DEFAULT '0000' NOT NULL,
      dealer  CHAR(20)                 DEFAULT ''     NOT NULL,
      price   DOUBLE(16,2)             DEFAULT '0.00' NOT NULL,
      PRIMARY KEY(article, dealer));
    INSERT INTO shop VALUES
      (1,'A',3.45),(1,'B',3.99),(2,'A',10.99),(3,'B',1.45),
      (3,'C',1.69),(3,'D',1.25),(4,'D',19.95);
  `),
  14: rTabs(`
    BEGIN
      SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
      EXCEPTION
        WHEN NO_DATA_FOUND THEN
          RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
          RAISE EXCEPTION 'employee % not unique', myname;
    END;
  `),
  68: rTabs(`
    <!DOCTYPE html>
    <html>
    <body>

    <h1>PHP example</h1>

    <?php
      echo "Hello World!";
    ?>

    </body>
    </html>
  `),
  71: rTabs(`
    # Python program to check if the number provided by the user is an Armstrong number or not
    # take input from the user
    num = int(input("Enter a number: "))
    # initialize sum
    sum = 0
    # find the sum of the cube of each digit
    temp = num
    while temp > 0:
       digit = temp % 10
       sum += digit ** 3
       temp //= 10
    # display the result
    if num == sum:
       print(num,"is an Armstrong number")
    else:
       print(num,"is not an Armstrong number")
  `),
  80: rTabs(`
    # Program to convert decimal number into binary number using recursive function
    convert_to_binary <- function(n) {
      if(n > 1) {
        convert_to_binary(as.integer(n/2))
      }
      cat(n %% 2)
    }
  `),
  72: rTabs(`
    def find_missing(sequence)
      consecutive     = sequence.each_cons(2)
      differences     = consecutive.map { |a,b| b - a }
      sequence        = differences.max_by { |n| differences.count(n) }
      missing_between = consecutive.find { |a,b| (b - a) != sequence }
      missing_between.first + sequence
    end
    find_missing([2,4,6,10])
    # 8
  `),
  73: rTabs(`
    struct Sheep { naked: bool, name: &'static str }

    trait Animal {
      // Static method signature; \`Self\` refers to the implementor type.
      fn new(name: &'static str) -> Self;

      // Instance method signatures; these will return a string.
      fn name(&self) -> &'static str;
      fn noise(&self) -> &'static str;

      // Traits can provide default method definitions.
      fn talk(&self) {
        println!("{} says {}", self.name(), self.noise());
      }
    }

    impl Sheep {
      fn is_naked(&self) -> bool {
        self.naked
      }

      fn shear(&mut self) {
        if self.is_naked() {
          // Implementor methods can use the implementor's trait methods.
          println!("{} is already naked...", self.name());
        } else {
          println!("{} gets a haircut!", self.name);

          self.naked = true;
        }
      }
    }

    // Implement the \`Animal\` trait for \`Sheep\`.
    impl Animal for Sheep {
      // \`Self\` is the implementor type: \`Sheep\`.
      fn new(name: &'static str) -> Sheep {
        Sheep { name: name, naked: false }
      }

      fn name(&self) -> &'static str {
        self.name
      }

      fn noise(&self) -> &'static str {
        if self.is_naked() {
          "baaaaah?"
        } else {
          "baaaaah!"
        }
      }
      
      // Default trait methods can be overridden.
      fn talk(&self) {
        // For example, we can add some quiet contemplation.
        println!("{} pauses briefly... {}", self.name, self.noise());
      }
    }

    fn main() {
      // Type annotation is necessary in this case.
      let mut dolly: Sheep = Animal::new("Dolly");
      // TODO ^ Try removing the type annotations.

      dolly.talk();
      dolly.shear();
      dolly.talk();
    }
  `),
  82: rTabs(`
    CREATE VIEW Failing_Students AS
    SELECT S_NAME, Student_ID
    FROM STUDENT
    WHERE GPA > 40;
  `),
  74: rTabs(`type Result = "pass" | "fail"

function verify(result: Result) {
      if (result === "pass") {
        console.log("Passed")
      } else {
        console.log("Failed")
      }
}
  `),
  22: rTabs(`
    <?xml version="1.0" encoding="ISO-8859-1"?>  
    <note>  
      <to>Tove</to>  
      <from>Jani</from>  
      <heading>Reminder</heading>  
      <body>Don't forget me this weekend!</body>  
    </note>
  `),
  23: rTabs(`
    %TAG ! tag:clarkevans.com,2002:
    --- !shape
      # Use the ! handle for presenting
      # tag:clarkevans.com,2002:circle
    - !circle
      center: &ORIGIN {x: 73, y: 129}
      radius: 7
    - !line
      start: *ORIGIN
      finish: { x: 89, y: 102 }
    - !label
      start: *ORIGIN
      color: 0xFFEEBB
      text: Pretty vector drawing.
  `),
};

export default examples;
