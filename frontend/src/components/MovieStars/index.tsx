import {ReactComponent as StarFull} from 'assets/img/star-full.svg';
import {ReactComponent as StarHalf} from 'assets/img/star-half.svg';
import {ReactComponent as StarEmpty} from 'assets/img/star-empty.svg';
import './styles.css';

type Props = {
  score: number;
}

type StarProps = {
  fills: number
}

function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];
  
    const integerPart = Math.floor(score);
  
    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }
  
    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }
  
    return fills;
  }


function Star({fills}: StarProps){
  if(fills === 0){
    return <StarEmpty />;
  }
  else if (fills === 0.5){
    return <StarHalf />;
  }
  else{
    return <StarFull />;
  }
}  

function MovieStars({score}: Props) {

  const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Star fills={fills[0]} />
            <Star fills={fills[1]} />
            <Star fills={fills[2]} />
            <Star fills={fills[3]} />
            <Star fills={fills[4]} />
        </div>
    );
}

export default MovieStars;