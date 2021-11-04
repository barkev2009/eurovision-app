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


def add(table, data):
    conn, cursor = conn_and_cursor()
    try:
        if type(data) == list:
            for record in data:
                query = """insert into {} {} values {}""".format(
                    table, tuple(record.keys()), tuple(record.values())
                )
                cursor.execute(query)
                conn.commit()
        elif type(data) == dict:
            cursor.execute(f'insert into {table} {tuple(data.keys())} values {tuple(data.values())}')
            conn.commit()
        else:
            print('Failed to perform query')
        cursor.execute(f'select * from {table}')
        print(*cursor.fetchall(), sep='\n')
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
        query = f'select s.id, s.name, a.name, a.country from songs s join authors a on s.author_id = a.id'
        cursor.execute(query)
        result = cursor.fetchall()
        result = [dict(zip(['song_id', 'song_name', 'artist_name', 'country'], item)) for item in result]
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()
    return result


if __name__ == '__main__':
    print(json.dumps(get_all_songs(), indent=4))
    # add('songs',
    #     [
    #         {
    #             "author_id": "2",
    #             "name": "Zitti e Buoni"
    #         },
    #         {
    #             "author_id": "3",
    #             "name": "RockSong"
    #         }
    #     ]
    #     )
