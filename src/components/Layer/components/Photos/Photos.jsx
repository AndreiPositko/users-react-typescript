import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { WaveLoading } from 'react-loadingg';
import { Container, Row, Col } from 'react-bootstrap';

import routes from '../../../../constants/routes';
import { getPhotosRequest } from '../../../../store/photos/actions';

import global from '../../../../common-style/global.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const Photos = () => {

    const dispatch = useDispatch();

    const { photos, loading } = useSelector(state => ({
        photos: state.photos.photos,
        loading: state.users.loading,
    }))

    useEffect(() => {
        dispatch(getPhotosRequest());
    }, [dispatch])

    return (
        <div>
            <Container className={ global.component_container }>
                 <Row>
                    {loading && <WaveLoading color='yellow' size='large' />}
                    <Col>
                    
                    <h2 className={global.main_title}>Photos</h2>
                    <ul className={ global.users_list}>
                        {photos.map((photo) => (
                            <li key={photo.id} className={global.list_item}>
                                <Link to={`${routes.photos}/${photo.id}`}>
                                    {photo.id}.
                                    <img src={photo.thumbnailUrl} alt={photo.title} />
                                </Link></li>
                        ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Photos;
