let firstName = 'Brenda';
let jobTitle = 'office worker';
let city = 'new york';
let newjobPost = `hello ${firstName},
Thank you for your interest in ${'office worker'} in ${city}. 
Someone will reach out to you shortly.
Sincerely,
Roman`

document.getElementById("result").innerHTML = newjobPost;
