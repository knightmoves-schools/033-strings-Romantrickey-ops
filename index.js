let firstName = 'Brenda';
let jobTitle = 'office worker';
let city = 'new york';
let newJobPost = `hello ${firstName},
Thank you for your interest in ${jobTitle} in ${city}. 
Someone will reach out to you shortly.
Sincerely,
Roman`

document.getElementById("result").innerHTML = newJobPost;
