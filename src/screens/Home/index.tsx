import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';

import { styles } from './styles';
import { Appointment } from '../../components/Appointment';

export function Home() {
  const [category, setCategory] = useState('');


  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      }, 
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que'
    }
  ];

  function handleCategoryselected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategoryselected}
        />

        <View style={styles.content}>
          <ListHeader 
            title="Partidas agendadas"
            subtitle="Total 6"
          />

          <FlatList 
           data={appointments}
           keyExtractor={item => item.id}
           renderItem={({item}) => (
             <Appointment data={item}/>
           )}
          />
        </View>
      </View>
    </View>
  );
}