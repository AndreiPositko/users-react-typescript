import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory, useRouteMatch } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { WaveLoading } from 'react-loadingg';
import { Button } from 'react-bootstrap';

import routes from '../../../../../../constants/routes';
import { photoReset } from '../../../../../../store/photos/actions';

import global from '../../../../../../common-style/global.module.scss';

const SinglePhoto = () => {

    const [currentPhoto, setCurrentPhoto] = useState({});

    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { url } = useRouteMatch();

    const { photos, loading } = useSelector(state => ({
        photos: state.photos.photos,
        loading: state.photos.loading,
    }));
    
    useEffect(() => {
        const currPhoto = photos.find(photo => photo.id === +id);
        setCurrentPhoto(currPhoto);

        return (() => {
            dispatch(photoReset());
        })
    }, [dispatch, photos, id]);
    
    const editCurrentPhoto = () => {
        history.push(`${url}/edit`)
    }

    return (
        <div>
            <Container>
                <Row>
                    {loading ? <WaveLoading color='yellow' size='large' position='top' /> :
                        currentPhoto.id ?
                        <Col>
                            <div className={ global.list_header }>
                                <h2 className={global.main_title}>Photo № {id}</h2>
                                <Button variant="warning" onClick={() => editCurrentPhoto(currentPhoto.id)}>Edit Photo</Button>
                            </div>
                            <ul className={global.data_list}>
                                <li className={global.list_item}>
                                    <span className={global.item}>
                                        photo title:
                            </span> {currentPhoto.title}
                                </li>
                                <li className={global.list_item}>
                                    <span className={global.item}>
                                        photo url:
                            </span> {currentPhoto.url}
                                </li>
                                <li className={global.list_item}>
                                    <span className={global.item}>
                                        photo img:
                            </span>
                                    <img src={currentPhoto.thumbnailUrl} alt={currentPhoto.title} />
                                </li>
                            </ul>
                        </Col>
                        :
                        <Col>
                            <div className={global.single_data_error}>
                                <p>There is no such user!</p>
                                <Link to={routes.photos} className={global.single_link_error}>Back to Users</Link>
                            </div>
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default SinglePhoto;
