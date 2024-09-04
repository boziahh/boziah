const pi = 3.14159265358979323846264338327950288419716939937519;
let radius;
let circumference;

document.getElementById('submit').onclick = function(){
    radius = document.getElementById('food').value
    circumference = 2*pi*radius
    document.getElementById('myp').textContent = `your circumference is ${circumference}`
}
