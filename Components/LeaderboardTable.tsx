/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { s } from 'react-native-wind';
//import { borderStyles } from 'react-native-wind/dist/styles/view/border-style';

type Columns = {
  name: string,
  score: number,
  time: string,
  date: string
};

interface Props {
  tableData: Columns[],
}

const LeaderboardTable : React.FC<Props> = ({ tableData}) => {
  const [tableHead] = useState<string[]>(['Name', 'Score', 'Time', 'Date']);

  const data = tableData.map(item => [item.name, item.score, item.time, item.date]);


  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <Table borderStyle={styles.borderStyle}>
          <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
          <Rows data={data} textStyle={styles.text} />
        </Table>
      </View>
    </View>
  );
};

const styles = {
  container: s`items-center`,
  table: s`bg-background-main border-questionColor border-2 rounded-lg overflow-hidden`,
  head: s`h-10 w-96 bg-background-main`,
  headText: s`text-2xl text-center text-wrap text-questionColor font-bold bg-background-main`,
  text: s`text-lg text-center text-wrap text-questionColor bg-background-main`,
  borderStyle: s`border-2 border-questionColor`,
};

export default LeaderboardTable;
