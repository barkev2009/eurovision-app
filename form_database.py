import sqlite3
from sqlite3 import Error
import json
import pandas as pd
import os


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
    cursor.execute('SELECT mas.id, mas.name, maa.name from main_app_song mas '
                   'join main_app_artist maa '
                   'on mas.artist_id = maa.id')
    return {(item[1], item[2]): item[0] for item in [*cursor.fetchall()]}


def get_all_years():
    conn, cursor = conn_and_cursor()
    cursor.execute('select * from main_app_year')
    return {item[1]: item[0] for item in [*cursor.fetchall()]}


def add_entries_by_year(year):
    countries = get_all_countries()
    all_entries = pd.read_csv(f'db_files/entries_{year}.csv', delimiter=',', header=None, encoding='utf-8')
    entry_records = all_entries.to_records()
    # entry = entry_records[0]
    # print(entry)

    conn, cursor = conn_and_cursor()
    if year not in get_all_years().keys():
        cursor.execute(f'insert into main_app_year (year) values ({year})')
        conn.commit()
    artist_query = 'insert into main_app_artist (name, country_id) values ("{}", {})'
    song_query = 'insert into main_app_song (name, artist_id) values ("{}", {})'
    entry_query = "insert into main_app_entry (contest_step_id, song_id, 'order', year_id, place, qualified, purity, " \
                  "difficulty, originality, show, sympathy) values ({}, {}, {}, {}, {}, 0, 0, 0, 0, 0, 0)"

    for entry in entry_records:
        print(entry)

        full_artist_query = artist_query.format(
            entry[-3],
            countries.get(entry[4])
        )
        if entry[-3] not in get_all_artists().keys():
            print(full_artist_query)
            cursor.execute(full_artist_query)
            conn.commit()

        full_song_query = song_query.format(
            entry[-2],
            get_all_artists().get(entry[-3])
        )
        if (entry[-2], entry[-3]) not in get_all_songs().keys():
            print(full_song_query)
            cursor.execute(full_song_query)
            conn.commit()

        entry_check_query = '''
        SELECT mas.name, maa.name, mac.name, may."year" from main_app_entry mae 
        join main_app_song mas 
        on mae.song_id = mas.id 
        join main_app_artist maa 
        on mas.artist_id = maa.id
        JOIN main_app_conteststep mac 
        on mae.contest_step_id = mac.id
        join main_app_year may 
        on mae.year_id = may.id
        '''
        cursor.execute(entry_check_query)
        entry_check_list = cursor.fetchall()
        if (entry[-2], entry[-3], entry[1], entry[2]) not in entry_check_list:
            full_entry_query = entry_query.format(
                get_all_steps().get(entry[1]),
                get_all_songs().get((entry[-2], entry[-3])),
                entry[3],
                get_all_years().get(entry[2]),
                entry[-1]
            )
            print(full_entry_query)
            cursor.execute(full_entry_query)
            conn.commit()


def add_countries(countries_list: list):
    conn, cursor = conn_and_cursor()
    query = 'insert into main_app_country (name) values ("{}")'
    for country in countries_list:
        print(query.format(country))
        cursor.execute(query.format(country))
        conn.commit()


def add_contest_steps():
    conn, cursor = conn_and_cursor()
    steps = ('First Semi-Final', 'Second Semi-Final', 'Grand Final')
    query = 'insert into main_app_conteststep (name) values ("{}")'
    for step in steps:
        if step not in get_all_steps().keys():
            print(query.format(step))
            cursor.execute(query.format(step))
            conn.commit()


def fill_db():
    add_contest_steps()
    available_years = list({int(item.split('.')[0][-4:]) for item in os.listdir('db_files')})
    for year in available_years:
        add_entries_by_year(year)


if __name__ == '__main__':
    # print(get_all_years())
    # add_entries_by_year(2021)
    fill_db()
    # print(get_all_songs().get(('Shine', 'The Toppers')))
    countries = [
        "US, Idaho"
        "US, Iowa",
        "US, Alabama",
        "US, Alaska",
        "US, Arizona",
        "US, Arkansas",
        "US, Wyoming",
        "US, Washington",
        "US, Vermont",
        "US, Virginia",
        "US, Wisconsin",
        "US, Hawaii",
        "US, Delaware",
        "US, Georgia",
        "US, West Virginia",
        "US, Illinois",
        "US, Indiana",
        "US, California",
        "US, Kansas",
        "US, Kentucky",
        "US, Colorado",
        "US, Connecticut",
        "US, Louisiana",
        "US, Massachusetts",
        "US, Minnesota",
        "US, Mississippi",
        "US, Missouri",
        "US, Michigan",
        "US, Montana",
        "US, Maine",
        "US, Maryland",
        "US, Nebraska",
        "US, Nevada",
        "US, New Hampshire",
        "US, New Jersey",
        "US, New York",
        "US, New Mexico",
        "US, Ohio",
        "US, Oklahoma",
        "US, Oregon",
        "US, Pennsylvania",
        "US, Rhode Island",
        "US, North Dakota",
        "US, North Carolina",
        "US, Tennessee",
        "US, Texas",
        "US, Florida",
        "US, South Dakota",
        "US, South Carolina",
        "US, Utah",
        "Russia,"
        "Italy",
        "Moldova,"
        "Georgia",
        "Albania",
        "Andorra",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Israel",
        "Italy",
        "Latvia",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Monaco",
        "Montenegro",
        "Morocco",
        "Netherlands",
        "North Macedonia",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "United Kingdom"
    ]
    # add_countries(countries)
