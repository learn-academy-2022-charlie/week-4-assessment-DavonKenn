# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'


def oddNeven(num1,num2,num3)
    if num1 (2) === 0
      "#{num1} is even"
    else
      "#{num1} is odd"
        end
    if num2 (2) === 0
    "#{num2} is even"
  else
    "#{num2} is odd"
    end
  if num3 (2) === 0
    "#{num3} is even"
  else
    "#{num3} is odd"
    end
end
  p oddNeven(7,42,221)
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

puts 'Please enter word'
 user_word = gets.chomp
 p album(user_word)  

def album (word)
    if word === word.gsub(/[aeiou]/, '')
                "#{word}"
   else  
        "#{word}"

    end 
end 

p album (user_word)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

puts 'Please enter word'
 user_word = gets.chomp
 p palin(user_word)  

 def palin(word)
     if word === word.reverse
                 "#{word}"
    else  
         "#{word}"

     end 
 end 

 p palin(user_word)