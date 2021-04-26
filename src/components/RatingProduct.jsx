import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';

const StyledRating = withStyles({
  iconFilled: {
    color: '#d6b410',
  },
})(Rating);

export default function RatingProduct({value}) {

  return (
    <div>
        <StyledRating 
        name="customized-empty"
        precision={0.5}
        value={value} 
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        readOnly />
    </div>
  );
}
