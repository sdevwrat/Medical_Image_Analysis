import React from 'react';
import '../CSS/Card.css';
import covid from '../Images/covid.jpg';
import skin from '../Images/skin2.jpg';
import tuber from '../Images/Tuberculosis.jpg';
import Pneumonia from '../Images/Pneumonia.jpg';
import retina from '../Images/retinopathy.jpg';
import Malaria from '../Images/Malaria.jpg';

const Cards = () => {
	return(
    <section class="wrapper style1">
        <div class="inner">
        <h1 className="light-green b f1">Services</h1>
          <article class="feature left">
            <span class="image"><img src={covid} alt="" /></span>
            <div class="content">
              <h1>Covid-19</h1>
              <p>It is the most common human malignancy, is primarily diagnosed visually, beginning with an initial clinical screening and followed potentially by dermoscopic analysis and histopathological examination. Detecting it in early stages can help prevent it from being lethal.</p>
              <p className="read-more">
               <a href="https://covid.medinform.tk/">Go to Page</a>
              </p>
            </div>
          </article>
          <article class="feature right">
            <span class="image"><img src={tuber} alt="" /></span>
            <div class="content">
              <h1>Tuberculosis</h1>
              <p>It affects many people in developing countries and treating it requires an accurate diagnosis,An algorithm that could perform this task quickly and cheaply could drastically improve the ability to diagnose and ultimately treat the disease.</p>
              <p className="read-more">
               <a href="https://tbc.medinform.tk/">Go to Page</a>
              </p>
            </div>
          </article>
          <article class="feature left">
            <span class="image"><img src={Pneumonia} alt="" /></span>
            <div class="content">
              <h1>Pneumonia</h1>
              <p>It is an inflammatory condition of the lung  and is usually caused by infection with viruses or bacteria and less commonly by other microorganisms.Diagnosis is often based on symptoms and physical examination. Chest X-rays help confirm the diagnosis.</p>
              <p className="read-more">
               <a href="https://pneumonia.medinform.tk/">Go to Page</a>
              </p>
            </div>
          </article>
          <article class="feature right">
            <span class="image"><img src={retina} alt="" /></span>
            <div class="content">
              <h1>Diabetic retinopathy </h1>
              <p>It is the most common and insidious microvascular complication of diabetes, and can progress asymptomatically until a sudden loss of vision occurs.Deep convolutional neural networks (DCNNs),8 can be used for an end-to-end assessment of raw medical images to produce a target outcome prediction.</p>
              <p className="read-more">
               <a href="https://diabetes.medinform.tk/">Go to Page</a>
              </p>
            </div>
          </article>
          <article class="feature left">
            <span class="image"><img src={skin} alt="" /></span>
            <div class="content">
              <h1>Skin Cancer</h1>
              <p>It is the most common human malignancy, is primarily diagnosed visually, beginning with an initial clinical screening and followed potentially by dermoscopic analysis and histopathological examination. Detecting it in early stages can help prevent it from being lethal.</p>
              <p className="read-more">
               <a href="https://cancer.medinform.tk/">Go to Page</a>
              </p>
            </div>
          </article>
          <article class="feature right">
            <span class="image"><img src={Malaria} alt="" /></span>
            <div class="content">
              <h1>Malaria</h1>
              <p>It is a deadly, infectious mosquito-borne disease caused by Plasmodium parasites transmitted by the bites of infected female Anopheles mosquitoes.Malaria detection is an intensive manual process which can perhaps be automated using Deep Learning to achieve swift and accurate diagnosis. 
</p>
              <p className="read-more">
               <a href="https://malaria.medinform.tk/">Go to Page</a>
              </p>
            </div>
          </article>
        </div>
      </section>
	);
}

export default Cards;
