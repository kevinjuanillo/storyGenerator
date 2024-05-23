function generateStory() {
    const form = document.getElementById('story-form');
    const noun = form.elements['noun'].value || "&lt;missing text&gt;";
    const fistVerbPast = form.elements['verb-past'].value || "&lt;missing text&gt;";
    const secondVerbPast = form.elements['verb-present'].value || "&lt;missing text&gt;";
    const firstAdjective = form.elements['adjective'][0].value || "&lt;missing text&gt;";
    const secondAdjective = form.elements['adjective'][1].value || "&lt;missing text&gt;";
   
    const storyTemplate = '<div id="story-paragraph" style="color:blue; font-family: comic sans-serif;">It was a dark stormy night. A shot rang out! A ' + noun + ' slammed. The maid ' + fistVerbPast + '. Suddenly, a ' + firstAdjective + ' ship appeared on the horizon! While millions of people ' + secondVerbPast + '. The king lived in luxury. Meanwhile, on a ' + secondAdjective + ' farm in Kansas, a boy was growing up.</div> <div style="color:blue;"><p> The End</p></div>'

    document.getElementById('input-section').style.display = "none";
    document.getElementById('story-section').style.display = "block";
    document.getElementById('story-text').innerHTML = "";
    document.getElementById('story-text').innerHTML += storyTemplate;


    var str = document.getElementById("story-paragraph").innerHTML; 
    var res = str.replace(new RegExp("&lt;missing text&gt;", 'g'), "<span style='color:red'>&lt;missing text&gt;</span>");
    document.getElementById("story-paragraph").innerHTML = res;

    
}

function returnToForm() {

    document.getElementById('input-section').style.display = "block";
    document.getElementById('story-section').style.display = "none";

    clearForm();
}

function clearForm() {
    const form = document.getElementById('story-form');
    form.reset();
}