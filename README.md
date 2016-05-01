## Japanesify
#### ~ Convert your names to Japanese characters ~

Have you ever wandered how your name is spelled in Japanese? Then **Japanesify** is your solution!

*( Following information is correct as of 1st May 2016 )*

### 1. Introduction
Japanesify was created as a part of Makerthon, a group project week at the Makers Academy ( For those who aren't familiar with the name, Makers Academy is a London-based 12-week programming bootcamp ). How it looked like at the end of the week can be found on *group-project-endpoint* branch. The version presented here on master branch shows what I have been personally implementing on top of where we left off.

The idea for this project came into my mind when people on the course asked me to spell their names out in Japanese. I knew there are quite a lot of interests in Asian letters in general here in the UK, exemplified by the popularity of clothing brand Superdry (their Japanese is often *beyond hilarious*, by the way). The level of interests is evident even just by the number of Japanese tattoos I find on streets. So I thought it would be useful to have a website that does the conversion for you.

I was fortunate to have an amazing group to realise this idea. Huge thanks and credits go to Anne, Caspar, Nick and Rhiannon, who were absolute joys to work with. We together created a cooperative, open and supportive environment, which allowed us to produce something we're so proud of!

So here it comes! The current version of Japanesify supports **40+ names** as an input and **Katakana** as an output. I am hoping to keep working on the conversion algorithm to support more names.

### 2. Development
Japanesify is a single-page application written in **Javascript** and built on **AngularJS** ( ver 1.5.5 ). We use **Karma** ( ver 0.13.22 ) for unit testing and **Protractor** ( ver 3.3.5 ) for end-to-end testing.

The conversion of alphabetical names into Katakana happens in two steps. The first and the most difficult step is to break names to correct syllables, for which we created **our very own algorithm**. As long as we get the first part right, the second part is easy! We go through the list of syllables, mapping each to a corresponding Katakana and stitch them all together.

The algorithm is still at the very early stage of its development and currently supports any syllables included in the names of our February 2016 cohort (plus coaches) at the Makers Academy. My intention is to keep expanding the list so that more people can enjoy.

Another feature I want to implement is to suggest a Katakana version of similar name if the programme fails to recognise one or more syllables. Similar names are often written and pronounced exactly same in Japanese (e.g. Gabriel & Gabrielle, Casper & Kasper & Caspar, Mary & Marie, etc...). Since users can check how the converted name pronounced via the link to Google Translate ( sound icon ), suggesting an alternative might

Following on this line, I'm also going to add a "Report a problem" type of feature. If an alternative suggestion still fails to provide them with a satisfactory result, users can communicate with me, be it by sending an email or filling a form, so that I can improve the algorithm even better!

### 3. How to use
Japanesify is available both online and offline. Installation instructions are below.

#### Online version
Visit <a href="https://japanesify.herokuapp.com/">Japanesify on Heroku</a>

#### Local installation
1. Fire up the terminal
2. Make sure you have installed latest version of Node.js and npm
3. Move to a directory where you want to create a clone of the app
4. Run `$ git clone https://github.com/MisaOgura/japanesify.git`
5. Move into japasesify directory with `$ cd japanesify`
6. Run `$ npm install`
7. Run `$ bower install`
8. Sanity check (unit tests) `$ karma start test/karma.conf.js`
9. Sanity check (e2e tests) `$ protractor test/protractor.conf.js`
10. Run `$ npm start`
11. Open up a browser and type `localhost:8080` in the URL bar
12. TADA! Enjoy converting your name :)

### 4. Authour
- <a href='https://github.com/MisaOgura'>Misa Ogura</a>

### 5. Collaborators
- <a href='https://github.com/AnnemarieKohler'>Annemarie Kohler</a>
- <a href='https://github.com/ccfz'>Caspar Fischer-Zernin</a>
- <a href='https://github.com/NickMountjoy'>Nick Mountjoy</a>
- <a href='https://github.com/rhiannonruth'>Rhiannon Lolley Neville</a>

( Hyperlink to Github profile )
