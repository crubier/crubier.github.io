'use strict';

import React from 'react';
// import TiltShift from './TiltShift';
// import ImageLoader from './ImageLoader';
import FontAwesome from './FontAwesome';
import NpmLogo from './NpmLogo';
import ResearchgateLogo from './ResearchgateLogo';
// import { Parallax, Background } from './Parallax';
import PortfolioItem from './PortfolioItem';

const style = {margin: '64px'};

const App = () => (<div id="root" style={{textAlign: 'center'}}>
  <img src="images/Identity.png" style={{textAlign: 'center', width: '120px', height: 'auto', ...style, marginBottom: '0px'}}/>
  <h1 id="title" style={style}>Vincent Lecrubier</h1>
  <ul style={style}>
    <li><a href="https://goo.gl/maps/VibbjV5G5Go"><FontAwesome name='map-marker'/> Toulouse, France</a></li>
    <li><a href="http://crubier.net"><FontAwesome name='home'/> crubier.net</a></li>
    <li><a href="https://www.linkedin.com/in/crubier"><FontAwesome name='linkedin'/> crubier</a></li>
    <li><a href="https://github.com/crubier"><FontAwesome name='github'/> crubier</a></li>
    <li><a href="https://www.facebook.com/vincentlecrubierkayak"><FontAwesome name='facebook'/> vincentlecrubierkayak</a></li>
    <li><a href="http://stackexchange.com/users/2752104/vincent-lecrubier"><FontAwesome name='stack-exchange'/> vincent-lecrubier</a></li>
    <li><a href="https://twitter.com/VLecrubier"><FontAwesome name='twitter'/> VLecrubier</a></li>
    <li><a href="https://www.facebook.com/vincent.lecrubier"><FontAwesome name='facebook-official'/> vincent.lecrubier</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Vincent_Lecrubier"><FontAwesome name='wikipedia-w'/> Vincent_Lecrubier</a></li>
    <li><a href="https://www.wikidata.org/wiki/Q3559711"><FontAwesome name='question'/> Q3559711</a></li>
    <li><a href="https://jsfiddle.net/user/Crubier/"><FontAwesome name='jsfiddle'/> crubier</a></li>
    <li><a href="https://www.npmjs.com/~crubier"><NpmLogo width={15} height={8}/> crubier</a></li>
    <li><a href="https://www.crunchbase.com/user/234257">CB Vincent Lecrubier</a></li>
    <li><a href="https://news.ycombinator.com/user?id=crubier"><FontAwesome name='hacker-news'/> crubier</a></li>
    <li><a href="https://www.reddit.com/user/crubier/"><FontAwesome name='reddit'/> crubier</a></li>
    <li><a href="https://www.researchgate.net/profile/Vincent_Lecrubier"><ResearchgateLogo width={13} height={13}/> Vincent_Lecrubier</a></li>
    <li><a href="http://fr.slideshare.net/VincentLecrubier"><FontAwesome name='slideshare'/> VincentLecrubier</a></li>
    <li><a href="https://slides.com/crubier">S crubier</a></li>
    <li><a href="https://www.youtube.com/user/120crubier"><FontAwesome name='youtube'/> 120crubier</a></li>
    <li><a href="https://instagram.com/crubier"><FontAwesome name='instagram'/> crubier</a></li>
    <li><a href="https://www.livecoding.tv/crubier"><FontAwesome name='code'/> crubier</a></li>
    <li><a href="https://www.mixcloud.com/superchouette/"><FontAwesome name='mixcloud'/> superchouette</a></li>
    <li><a href="https://soundcloud.com/superchouette"><FontAwesome name='soundcloud'/> superchouette</a></li>
    <li><a href="http://www.quora.com/Vincent-Lecrubier">Q Vincent-Lecrubier</a></li>
    <li><a href="https://www.pinterest.com/crubier/"><FontAwesome name='pinterest'/> crubier</a></li>
    <li><a href="http://www.lequipe.fr/Jo/JoFicheAthlete24878.html">E Vincent Lecrubier</a></li>
    <li><a href="http://crubier.synology.me"><FontAwesome name='server'/> crubier.synology.me</a></li>
  </ul>
  <p style={{textAlign: 'center', ...style}}>Hi, my name is Vincent Lecrubier, I am an aerospace engineer, a computer science PhD, and an olympic kayaker. Here is some cool stuff I like to do:</p>
  <section id="photos" style={style}>
    <PortfolioItem href="." src="images/Kayak1.jpg" text="Kayaking"/>
    <PortfolioItem href="." src="images/AgileCopter1.jpg" text="Agile Copter build"/>
    <PortfolioItem href="." src="images/Kayak2.jpg" text="Kayaking"/>
    <PortfolioItem href="." src="images/Photo1.jpg" text="Photography"/>
    <PortfolioItem href="." src="images/AgileCopter2.png" text="Agile Copter principles"/>
    <PortfolioItem href="." src="images/Data1.png" text="Data analysis"/>
    <PortfolioItem href="." src="images/Outdoor1.jpg" text="Outdoor sports"/>
    <PortfolioItem href="." src="images/Lidl1.png" text="Interaction programming sandbox"/>
    <PortfolioItem href="http://www.sterblue.com/#!home/bc48z" src="images/Sterblue1.jpg" text="Sterblue UAV inspections"/>
    <PortfolioItem href="." src="images/Lidl2.png" text="Interaction programming sandbox"/>
    <PortfolioItem href="." src="images/Photo2.jpg" text="Photography"/>
    <PortfolioItem href="http://www.isae.fr/fr/actualites/programme_d_ouverture_sociale_l_isae_parrains_temoignent.html" src="images/Social1.jpg" text="Social actions"/>
    <PortfolioItem href="." src="images/Kayak5.jpg" text="Kayaking"/>
    <PortfolioItem href="." src="images/Lidl4.png" text="Interaction programming principles"/>
    <PortfolioItem href="." src="images/Live1.jpg" text="Generative visuals"/>
    <PortfolioItem href="." src="images/Graph1.png" text="Graph visualization"/>
    <PortfolioItem href="." src="images/Kayak3.jpg" text="Kayaking"/>
    <PortfolioItem href="." src="images/Factis1.png" text="Graph database"/>
    <PortfolioItem href="http://www.ckcir.fr" src="images/Kayak6.jpg" text="Being part of a club"/>
    <PortfolioItem href="." src="images/EmbeddedUI1.png" text="Embedded UI"/>
    <PortfolioItem href="." src="images/CGI1.jpg" text="Computer generated imagery"/>
    <PortfolioItem href="." src="images/Lidl3.png" text="Interaction programming principles"/>
    <PortfolioItem href="." src="images/Outdoor2.jpg" text="Outdoor sports"/>
    <PortfolioItem href="." src="images/Shaders1.png" text="Shaders"/>
    <PortfolioItem href="." src="images/Kayak4.jpg" text="Kayaking"/>
    <PortfolioItem href="." src="images/Outdoor3.jpg" text="Outdoor sports"/>
    <PortfolioItem href="." src="images/CGI2.jpg" text="Computer generated imagery"/>
    <PortfolioItem href="." src="images/Math1.jpg" text="Using maths to rant"/>
    <PortfolioItem href="http://supaero.isae.fr/fr/galerie_photos/aerodrome_lasbordes.html" src="images/Fly1.jpg" text="Flying"/>
  </section>
  <p style={{textAlign: 'center', ...style}}>Made by <a href="http://crubier.net">Crubier</a> with <FontAwesome name='heart'/>, source on <a href="https://github.com/crubier/crubier.github.io">Github</a></p>
</div>);

export default App;
