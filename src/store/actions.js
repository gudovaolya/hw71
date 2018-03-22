import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const picsRequestStart = () => {
    return {type: actionTypes.PICS_REQUEST_START}
};

export const picsRequestSucces = (picsData, picsAfter) => {
    return {type: actionTypes.PICS_REQUEST_SUCCES, items: picsData, after: picsAfter}
};

export const picsRequestEror = () => {
    return {type: actionTypes.PICS_REQUEST_ERROR}
};

export const nextPicsRequestSucces = (nextPicsData, nextPicsAfter) => {
    return {type: actionTypes.NEXT_PICS_REQUEST_SUCCES, nextItems: nextPicsData, nextAfter: nextPicsAfter}
};

export const getItems = () => {
    return dispatch => {
        dispatch(picsRequestStart());
        axios.get('https://www.reddit.com/r/pics.json').then(response => {
            const result = response.data;
            const children = result.data.children;
            const after = result.data.after;
            let items = children.map(item => {
                return {key: item.data.id, pic: item.data.thumbnail, title: item.data.title}
            });
            dispatch(picsRequestSucces(items, after));
        }, error => {
            dispatch(picsRequestEror());
        })

    }
};

export const getNextItems = (after) => {
    return dispatch => {
        dispatch(picsRequestStart());
        axios.get('https://www.reddit.com/r/pics.json?count=25&after=' + after).then(response => {
            const result = response.data;
            const children = result.data.children;
            const nextAfter = result.data.after;
            let nextItems = children.map(item => {
                return {key: item.data.id, pic: item.data.thumbnail, title: item.data.title}
            });
            dispatch(nextPicsRequestSucces(nextItems, nextAfter));
        }, error => {
            dispatch(picsRequestEror());
        })

    }
};

