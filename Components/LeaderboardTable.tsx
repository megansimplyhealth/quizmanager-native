/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

type Columns = {
  name: string;
  score: number;
  time: string;
};

interface Props {
  tableData: Columns[],
}

const LeaderboardTable : React.FC<Props> = ({ tableData}) => {
  const [tableHead] = useState<string[]>(['Name', 'Score', 'Time']);

  const data = tableData.map(item => [item.name, item.score.toString(), item.time]);


  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={data} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});

export default LeaderboardTable;
