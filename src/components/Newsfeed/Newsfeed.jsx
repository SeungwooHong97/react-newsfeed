import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import supabase from '../../../suparbase';
// import {} from "./NewsfeedStyle";

const Newsfeed = () => {
  // const [id, setId] = useState();

  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   const getNewsfeed = async () => {
  //     // console.log(id);
  //     const { data, e } = await supabase.from('postings').select('*').eq('user_id', id);
  //     if (e) {
  //       console.log(e);
  //     } else {
  //       console.log(data);
  //     }
  //   };
  //   getNewsfeed();
  // }, []);

  return (
    <div>
      {/* <div></div>

      {users.map((user) => {
        return (
          <div key={user.id} style={{ border: '1px solid black', marginBottom: '10px' }}>
            <h5>유저 고유 값 : {user.id}</h5>
            <h5>이름 : {user.name}</h5>
            <h5>사는 곳 : {user.address}</h5>
            <h5>나이 : {user.age}</h5>
          </div>
        );
      })} */}

      <h1>유저 페이지입니다</h1>
    </div>
  );
};

export default Newsfeed;
