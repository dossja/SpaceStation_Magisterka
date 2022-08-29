import os
import sys
import pandas as pd

language = sys.argv[1]
test = sys.argv[2]

writer = pd.ExcelWriter(f"JMeter_{language}_{test}.xlsx")

with open(f"summary{language}_MIN_{test}.csv", "r") as read_file:
    data_min = pd.read_csv(read_file)
    data_min.to_excel(writer, sheet_name="MIN")

with open(f"summary{language}_MED_{test}.csv", "r") as read_file:
    data_med = pd.read_csv(read_file)
    data_med.to_excel(writer, sheet_name="MED")

with open(f"summary{language}_MAX_{test}.csv", "r") as read_file:
    data_max = pd.read_csv(read_file)
    data_max.to_excel(writer, sheet_name="MAX")

writer.save()
writer.close()
