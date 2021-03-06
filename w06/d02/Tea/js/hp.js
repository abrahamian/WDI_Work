var potter = "\u201CAre you okay, Harry?\u201D Ginny asked quietly. \r\n\r\n\u201CYeah, I\u2019m fine,\u201D said Harry gruffly. The lump in his throat was painful. He did not understand why an Easter egg should have made him feel like this. \r\n\r\n\u201CYou seem really down lately,\u201D Ginny persisted. \u201CYou know, I\u2019m sure if you just talked to Cho\u2026\u201D \r\n\r\n\u201CIt\u2019s not Cho I want to talk to,\u201D said Harry brusquely. \r\n\r\n\u201CWho is it, then?\u201D asked Ginny, watching him closely. \r\n\r\n\u201CI\u2026\u201D \r\n\r\nHe glanced around to make quite sure nobody was listening. Madam Pince was several shelves away, stamping out a pile of books for a frantic-looking Hannah Abbott. \r\n\r\n\u201CI wish I could talk to Sirius,\u201D he muttered. \u201CBut I know I can\u2019t.\u201D \r\nGinny continued to watch him thoughtfully. More to give himself something to do than because he really wanted any, Harry unwrapped his Easter egg, broke off a large bit and put it into his mouth. \r\n\r\n\u201CWell,\u201D said Ginny slowly, helping herself to a bit of egg, too, \u201Cif you really want to talk to Sirius, I expect we could think of a way to do it.\u201D \r\n\r\n\u201CCome on,\u201D said Harry dully. \u201CWith Umbridge policing the fires and reading all our mail?\u201D \r\n\r\n\u201CThe thing about growing up with Fred and George,\u201D said Ginny thoughtfully, \u201Cis that you sort of start thinking anything\u2019s possible if you\u2019ve got enough nerve.\u201D \r\n\r\nHarry looked at her. Perhaps it was the effect of the chocolate \u2013 Lupin had always advised eating some after encounters with Dementors \u2013 or simply because he had finally spoken aloud the wish that had been burning inside him for a week, but he felt a bit more hopeful."



function findHarry(text) {
  var words = text.split(" ");
  var count = 0;

  forEach(words, function(word) {
    if (word.indexOf("Harry") != -1) {
      count++;
    }
  });

  return count; 
}

function countWords(text, findWord) {
  var words = text.split(" ");
  var count = 0;

  forEach(words, function(word) {
    if (word.indexOf(findWord) != -1) {
      count++;
    }
  });

  return count; 
}