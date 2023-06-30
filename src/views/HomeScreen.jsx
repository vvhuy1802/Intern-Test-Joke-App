import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CookieManager from '@react-native-cookies/cookies';

import Header from '../components/Header';
import ButtonVote from '../components/ButtonVote';

import {dataJoke} from '../assets/data/dataJoke';

const HomeScreen = () => {
  const id_user = 'huy1';
  const [allJoke, setAllJoke] = useState(dataJoke);
  const [currnetJoke, setCurrentJoke] = useState([]);

  useEffect(() => {
    const randomJoke = Math.floor(Math.random() * allJoke.length);
    setCurrentJoke(dataJoke[randomJoke]);
  }, []);

  const setCookie = async data => {
    try {
      const result = await CookieManager.get('http://jokervn.com');
      const arrCookie = JSON.stringify(result?.joke?.value)
        ? [...JSON.parse(result.joke.value), data]
        : [data];
      console.log('CookieManager.get =>', arrCookie);
      await CookieManager.set('http://jokervn.com', {
        name: 'joke',
        value: JSON.stringify(arrCookie),
        path: '/',
      }).then(res => {
        console.log('CookieManager.set =>', res);
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
      const result = await CookieManager.get('http://jokervn.com');
      console.log('CookieManager.get =>', result?.joke?.value);
      return;
    } else {
      const data = {
        id_joke: currnetJoke.id,
        id_user: id_user,
        isFunny: null,
      };
      data.isFunny = vote === 'funny' ? true : false;
      await setCookie(data);
      const randomJoke = Math.floor(Math.random() * newJoke.length);
      setCurrentJoke(newJoke[randomJoke]);
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View style={styles.banner}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
            }}>
            A joke a day keeps the doctor away
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'white',
              marginTop: 20,
            }}>
            If you joke wrong way, your teeth have to pay. (Serious)
          </Text>
        </View>
        <View style={styles.content}>
          <Text
            style={{
              fontSize: 13,
              color: 'grey',
              fontWeight: '500',
              marginTop: 50,
              marginHorizontal: 20,
              lineHeight: 18,
            }}>
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
                color={'#2C7EDB'}
                handleVote={handleVote}
              />
              <ButtonVote
                id={'notfunny'}
                title={'This is not funny.'}
                color={'#29B363'}
                handleVote={handleVote}
              />
            </>
          )}
        </View>
        <View style={styles.footer}>
          <View style={{padding: 5, paddingHorizontal: 10}}>
            <Text
              style={{
                fontSize: 11,
                color: 'grey',
                fontWeight: '400',
                textAlign: 'center',
              }}>
              This appis created as part of HLsolutions program. The materials
              contained on this webstie are provied for general information only
              and do not constitule any form of advice. HLS assumes no
              responsibility for the accuracy of any particular statement and
              accepts no liability for any loss or damage that may arise from
              reliance on the information contained on this site.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  banner: {
    backgroundColor: '#29B363',
    flex: 1.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    flex: 3.85,
  },
  vote: {
    backgroundColor: 'white',
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    backgroundColor: 'white',
    flex: 1.1,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
});
