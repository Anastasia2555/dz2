import React from 'react';
import Spoiler from '../components/Spoiler';
import RangeInput from '../components/RangeInput';
import LoginForm from '../components/LoginForm';
import PasswordConfirm from '../components/PasswordConfirm';
import Carousel from '../components/Carousel';
import Pagination from '../components/Pagination';

const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>

            <Spoiler header="Spoiler 1" open={false}>
                <p>This is the content of Spoiler 1</p>
            </Spoiler>

            <RangeInput min={2} max={10} />

            <LoginForm onLogin={(login, password) => console.log(`Login: ${login}, Password: ${password}`)} />

            <PasswordConfirm min={4} />

            <Carousel images={[
                'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
                'https://media1.thrillophilia.com/filestore/ur4lt5i6yjilg39oe4at5j1syxmx_IMG20of20-%202.webp',
                'https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp'
            ]} />

            <Pagination max={5} render={({ page, onClick }) => <button key={page} onClick={onClick}>{page}</button>} />
        </div>
    );
};

export default MainPage;
