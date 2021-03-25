import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { WaveLoading } from 'react-loadingg';

import { getPhotoRequest, photoReset } from '../../../../store/photos/actions';

import { Container, Row, Col } from 'react-bootstrap';

import global from '../../../../common-style/global.module.scss';

const SinglePhoto = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPhotoRequest(id));

        return (() => {
            dispatch(photoReset());
        })
    }, [dispatch ,id]);

    const { photo, loading } = useSelector(state => ({
        photo: state.photos.singlePhoto,
        loading: state.photos.loading,
    }))

    return (
        <div>
            <Container>
                <Row>
                    {loading && <WaveLoading color='yellow' size='large' position='top' />}
                    <Col>
                        <h2 className={ global.main_title }>Photo № { photo.id }</h2>
                        <ul className={ global.data_list }>
                            <li className={ global.list_item }>
                                <span className={ global.item }>
                                    photo title: 
                                </span> { photo.title }
                            </li>
                            <li className={ global.list_item }>
                                <span className={ global.item }>
                                    photo url: 
                                </span> {photo.url}
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SinglePhoto;
