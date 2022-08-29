import os
from re import I
import re
import openpyxl
import json
import sys
import pandas as pd

data = {}
language = sys.argv[1]

data_Writer = pd.ExcelWriter(f"Postman_{language}.xlsx")


def load_data(resources):
    data = pd.DataFrame()
    data_tmp = pd.DataFrame()
    with open(f"SpaceStation_{language}_{resources}_1.postman_test_run.json", "r") as read_file:
        data1 = json.load(read_file)
    results1 = data1["results"]

    with open(f"SpaceStation_{language}_{resources}_2.postman_test_run.json", "r") as read_file:
        data2 = json.load(read_file)
    results2 = data2["results"]

    with open(f"SpaceStation_{language}_{resources}_3.postman_test_run.json", "r") as read_file:
        data3 = json.load(read_file)
    results3 = data3["results"]

    with open(f"SpaceStation_{language}_{resources}_4.postman_test_run.json", "r") as read_file:
        data4 = json.load(read_file)
    results4 = data4["results"]

    with open(f"SpaceStation_{language}_{resources}_5.postman_test_run.json", "r") as read_file:
        data5 = json.load(read_file)
    results5 = data5["results"]
    labels = []
    values = [[], [], [], [], []]
    sum = [0, 0, 0, 0, 0]

    for i in range(len(results1)):
        labels.append(results1[i]['name'])
        values[0].append(results1[i]["time"]*0.001)
        values[1].append(results2[i]["time"]*0.001)
        values[2].append(results3[i]["time"]*0.001)
        values[3].append(results4[i]["time"]*0.001)
        values[4].append(results5[i]["time"]*0.001)
        sum[0] += values[0][i]
        sum[1] += values[1][i]
        sum[2] += values[2][i]
        sum[3] += values[3][i]
        sum[4] += values[4][i]

    labels.append("Summary")
    values[0].append(sum[0])
    values[1].append(sum[1])
    values[2].append(sum[2])
    values[3].append(sum[3])
    values[4].append(sum[4])

    data_tmp["Iter 1"] = values[0]
    data_tmp["Iter 2"] = values[1]
    data_tmp["Iter 3"] = values[2]
    data_tmp["Iter 4"] = values[3]
    data_tmp["Iter 5"] = values[4]

    data["Labels"] = labels
    data["Average"] = data_tmp.mean(axis=1)
    data["Minimum"] = data_tmp.min(axis=1)
    data["Maximum"] = data_tmp.max(axis=1)
    data["St.dev"] = data_tmp.std(axis=1)

    data.to_excel(data_Writer, sheet_name=resources)


load_data("MIN")
load_data("MED")
load_data("MAX")

data_Writer.save()
data_Writer.close()
