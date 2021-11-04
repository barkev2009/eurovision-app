import sqlite3
from sqlite3 import Error
import json


def conn_and_cursor():
    conn = cursor = None
    try:
        conn = sqlite3.connect('eurovision.db')
        cursor = conn.cursor()
    except Error as e:
        print(e)
    return conn, cursor


def add_songs(data):
    conn, cursor = conn_and_cursor()
    try:
        if type(data) == list:
            for record in data:
                query = """insert into songs {} values {}""".format(
                    tuple(record.keys()), tuple(record.values())
                )
                cursor.execute(query)
                conn.commit()
        elif type(data) == dict:
            cursor.execute(f'insert into songs {tuple(data.keys())} values {tuple(data.values())}')
            conn.commit()
        else:
            print('Failed to perform query')
        cursor.execute('select * from songs')
        print(cursor.fetchall())
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()


def delete_songs_by_id(id):
    conn, cursor = conn_and_cursor()
    try:
        query = f'delete from songs where id = {id}'
        cursor.execute(query)
        conn.commit()
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()


def get_all_songs():
    conn, cursor = conn_and_cursor()
    result = None
    try:
        query = f'select * from songs'
        cursor.execute(query)
        result = cursor.fetchall()
        result = [dict(zip(['song_id', 'song_name', 'artist_id'], item)) for item in result]
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()
    return result


if __name__ == '__main__':
    print(json.dumps(get_all_songs(), indent=4))
