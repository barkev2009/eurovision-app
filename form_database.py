import sqlite3
from sqlite3 import Error
import json
import pandas as pd


def conn_and_cursor():
    conn = cursor = None
    try:
        conn = sqlite3.connect('db.sqlite3')
        cursor = conn.cursor()
    except Error as e:
        print(e)
    return conn, cursor


def get_all_countries():
    conn, cursor = conn_and_cursor()
    cursor.execute('select * from main_app_country')
    return {item[1]: item[0] for item in [*cursor.fetchall()]}


def get_all_steps():
    conn, cursor = conn_and_cursor()
    cursor.execute('select * from main_app_conteststep')
    return {item[1]: item[0] for item in [*cursor.fetchall()]}


def get_all_artists():
    conn, cursor = conn_and_cursor()
    cursor.execute('select * from main_app_artist')
    return {item[1]: item[0] for item in [*cursor.fetchall()]}


def get_all_songs():
    conn, cursor = conn_and_cursor()
    cursor.execute('select * from main_app_song')
    return {item[1]: item[0] for item in [*cursor.fetchall()]}


def get_all_years():
    conn, cursor = conn_and_cursor()
    cursor.execute('select * from main_app_year')
    return {item[1]: item[0] for item in [*cursor.fetchall()]}


def add_entries():
    countries = get_all_countries()
    all_entries = pd.read_csv('db_files/entries_2016.csv', delimiter=',', header=None, encoding='utf-8')
    entry_records = all_entries.to_records()
    # entry = entry_records[0]
    # print(entry)


    conn, cursor = conn_and_cursor()
    artist_query = 'insert into main_app_artist (name, country_id) values ("{}", {})'
    song_query = 'insert into main_app_song (name, artist_id) values ("{}", {})'
    entry_query = "insert into main_app_entry (contest_step_id, song_id, 'order', year_id, qualified, purity, " \
                  "difficulty, originality, show, sympathy) values ({}, {}, {}, {}, 0, 0, 0, 0, 0, 0)"

    for entry in entry_records:
        print(entry)

        full_artist_query = artist_query.format(
            entry[-2],
            countries.get(entry[-3])
        )
        if entry[-2] not in get_all_artists().keys():
            print(full_artist_query)
            cursor.execute(full_artist_query)
            conn.commit()

        full_song_query = song_query.format(
            entry[-1],
            get_all_artists().get(entry[-2])
        )
        if entry[-1] not in get_all_songs().keys():
            print(full_song_query)
            cursor.execute(full_song_query)
            conn.commit()

        full_entry_query = entry_query.format(
            get_all_steps().get(entry[1]),
            get_all_songs().get(entry[-1]),
            entry[3],
            get_all_years().get(entry[2])
        )
        print(full_entry_query)
        cursor.execute(full_entry_query)
        conn.commit()


if __name__ == '__main__':
    # print(get_all_years())
    add_entries()