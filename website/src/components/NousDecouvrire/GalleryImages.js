import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
}));





export default function ImageGridList({ dataImg, handleImgClick }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {dataImg.map(tile => (
                        <GridListTile  cols={tile.cols || 1}  key={tile.img} >
                            <img src={tile.img} alt={tile.title} onClick={() => handleImgClick(dataImg.indexOf(tile) + 1)} />
                        </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
