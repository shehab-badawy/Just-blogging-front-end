import { Link } from "react-router-dom";

export default function Entry()
{
    return(
        <div className="entry">
            <div className="image">
            <img src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150929101049-black-coffee-stock.jpg" alt="" />
            </div>
            <div className="content">
            <h2>Have that coffee after breakfast especially if you had a bad night’s sleep, research suggests</h2>
            <p className="info">
                <Link to="https://shehab-badawy.github.io/MyPortfolio/" className="owner">Shehab Radwan</Link>
                <time> 2001-04-01 14:00</time>
            </p>
            <p className="conclusion"> 10 reasons for why you would want it!</p>
            <div className="gradient"></div>
            <p>A strong coffee after a poor night’s sleep is the kick-start many people need in the morning but new research suggests that it might be best to have a bite to eat first. A study has found that drinking coffee first thing can have a negative effect on blood sugar control – a risk factor for diabetes and heart disease.</p>
            </div>
      </div>

    );
}