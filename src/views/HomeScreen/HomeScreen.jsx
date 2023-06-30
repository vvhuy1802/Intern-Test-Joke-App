import {Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CookieManager from '@react-native-cookies/cookies';

import Header from '../../components/Header/Header';
import ButtonVote from '../../components/ButtonVote/ButtonVote';

import {dataJoke} from '../../assets/data/dataJoke';
import {styles} from './styles';
import COLORS from '../../assets/global/colors';

const HomeScreen = () => {
  const id_user = 'huy1';
  const [allJoke, setAllJoke] = useState(dataJoke);
  const [currnetJoke, setCurrentJoke] = useState([]);

  //Take the random joke from dataJoke
  useEffect(() => {
    const randomJoke = Math.floor(Math.random() * allJoke.length);
    setCurrentJoke(dataJoke[randomJoke]);
  }, [allJoke.length]);

  //Set cookie
  const setCookie = async data => {
    try {
      const result = await CookieManager.get('http://jokervn.com');
      const arrCookie = JSON.stringify(result?.joke?.value)
        ? [...JSON.parse(result.joke.value), data]
        : [data];
      await CookieManager.set('http://jokervn.com', {
        name: 'joke',
        value: JSON.stringify(arrCookie),
        path: '/',
      });
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
  };

  const handleVote = async vote => {
    const newJoke = allJoke.filter(item => item.id !== currnetJoke.id);
    setAllJoke(newJoke);
    if (newJoke.length === 0) {
      setCurrentJoke({
        id: 0,
        joke: ["That's all the jokes for today! Come back another day!"],
      });
      return;
    } else {
      const data = {
        id_joke: currnetJoke.id,
        id_user: id_user,
        isFunny: null,
      };
      data.isFunny = vote === 'funny';
      await setCookie(data);
      const randomJoke = Math.floor(Math.random() * newJoke.length);
      setCurrentJoke(newJoke[randomJoke]);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.banner_title}>
            A joke a day keeps the doctor away
          </Text>
          <Text style={styles.banner_subtitle}>
            If you joke wrong way, your teeth have to pay. (Serious)
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.content_text}>
            {currnetJoke?.joke?.map((item, index) => {
              return (
                <Text key={index}>
                  {item}
                  {'\n'}
                </Text>
              );
            })}
          </Text>
        </View>
        <View style={styles.vote}>
          {currnetJoke?.id !== 0 && (
            <>
              <ButtonVote
                id={'funny'}
                title={'This is Funny!'}
                color={COLORS.blue}
                handleVote={handleVote}
              />
              <ButtonVote
                id={'notfunny'}
                title={'This is not funny.'}
                color={COLORS.green}
                handleVote={handleVote}
              />
            </>
          )}
        </View>
        <View style={styles.footer}>
          <View style={styles.footer_container}>
            <Text style={styles.footer_text}>
              This app is created as part of HLsolutions program. The materials
              contained on this website are provied for general information only
              and do not constitule any form of advice. HLS assumes no
              responsibility for the accuracy of any particular statement and
              accepts no liability for any loss or damage that may arise from
              reliance on the information contained on this site.
            </Text>
            <Text style={styles.footer_copy}>Copyright 2021 HLS</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
