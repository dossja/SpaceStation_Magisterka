import os
from re import I
import openpyxl
import json
import sys

data = {}
language = sys.argv[1]
resources = sys.argv[2]

with open(f"SpaceStation_{language}_{resources}.postman_test_run.json", "r") as read_file:
    data = json.load(read_file)

results = data["results"]


path = f"{language}_{resources}_Postman.xlsx"

book = openpyxl.Workbook()
if os.path.isfile(path):
    book = openpyxl.load_workbook(path)

iter = 0

for el in results:
    sheetName = ""

    if (iter == 0 or iter == 1 or iter == 2 or iter == 3):
        sheetName = "Reports"
    if (iter == 4 or iter == 5 or iter == 6):
        sheetName = "Incidents"
    if (iter == 7 or iter == 8 or iter == 9):
        sheetName = "Missions"
    if (iter == 10 or iter == 11 or iter == 12 or iter == 13):
        sheetName = "MissionCrew"
    if (iter == 14):
        sheetName = "PositionTypes"
    if (iter == 15):
        sheetName = "ReportStatuses"
    if (iter == 16):
        sheetName = "ReportTypes"
    if (iter == 17 or iter == 18 or iter == 19 or iter == 20 or iter == 21 or iter == 22):
        sheetName = "Users"

    iter += 1
    isSheet = False

    for sh in book:
        if sh.title == sheetName:
            isSheet = True

    if isSheet == False:
        book.create_sheet(sheetName)

    sheet = book[sheetName]

    time = float(el['times'][0]) * 0.001

    sheet.append([el['name']])
    sheet.append(["", "Time"])
    sheet.append(["", time])
    sheet.append([""])

if book.sheetnames[0] == "Sheet":
    sheet_to_del = book['Sheet']
    book.remove(sheet_to_del)

book.save(f"{language}_{resources}_Postman.xlsx")
