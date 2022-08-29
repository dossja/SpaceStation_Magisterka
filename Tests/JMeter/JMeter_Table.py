import os
import sys
import pandas as pd

language = sys.argv[1]

data1 = pd.read_excel(f"JMeter_{language}_1.xlsx", sheet_name=None)
data2 = pd.read_excel(f"JMeter_{language}_2.xlsx", sheet_name=None)
data3 = pd.read_excel(f"JMeter_{language}_3.xlsx", sheet_name=None)
data4 = pd.read_excel(f"JMeter_{language}_4.xlsx", sheet_name=None)
data5 = pd.read_excel(f"JMeter_{language}_5.xlsx", sheet_name=None)

data_Writer = pd.ExcelWriter(f"JMeter_{language}.xlsx")


def load_data(test):
    data = pd.DataFrame()
    data_tmp = pd.DataFrame()

    data["Label"] = data1[test]["Label"]

    data_tmp["Throughput - 1"] = data1[test]["Throughput"]
    data_tmp["Throughput - 2"] = data2[test]["Throughput"]
    data_tmp["Throughput - 3"] = data3[test]["Throughput"]
    data_tmp["Throughput - 4"] = data4[test]["Throughput"]
    data_tmp["Throughput - 5"] = data5[test]["Throughput"]
    data["Throughput Average"] = data_tmp.mean(axis=1)
    data["Throughput Minimum"] = data_tmp.min(axis=1)
    data["Throughput Maximum"] = data_tmp.max(axis=1)
    data["Throughput St.dev"] = data_tmp.std(axis=1)

    data_tmp = pd.DataFrame(None)

    newData1 = []
    newData2 = []
    newData3 = []
    newData4 = []
    newData5 = []
    for d in data1[test]['Error %']:
        newData1.append(float(d.split('%')[0]))
    for d in data2[test]['Error %']:
        newData2.append(float(d.split('%')[0]))
    for d in data3[test]['Error %']:
        newData3.append(float(d.split('%')[0]))
    for d in data4[test]['Error %']:
        newData4.append(float(d.split('%')[0]))
    for d in data5[test]['Error %']:
        newData5.append(float(d.split('%')[0]))

    data_tmp["Error - 1"] = newData1
    data_tmp["Error - 2"] = newData2
    data_tmp["Error - 3"] = newData3
    data_tmp["Error - 4"] = newData4
    data_tmp["Error - 5"] = newData5

    data["Error Average"] = data_tmp.mean(axis=1)
    data["Error Minimum"] = data_tmp.min(axis=1)
    data["Error Maximum"] = data_tmp.max(axis=1)
    data["Error St.dev"] = data_tmp.std(axis=1)

    print(data)

    data.to_excel(data_Writer, sheet_name=test)


load_data("MIN")
load_data("MED")
load_data("MAX")

data_Writer.save()
data_Writer.close()
