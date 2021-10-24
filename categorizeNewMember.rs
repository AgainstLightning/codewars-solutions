// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

fn open_or_senior(data: Vec<(i32, i32)>) -> Vec<String> {
    let mut results: Vec<String> = vec![];
    
    for (age, handicap) in data {
        if (age >= 55) && (handicap > 7) {
            results.push(String::from("Senior"));
        } else {
            results.push(String::from("Open"));
        }
    }
    
    return results;
}