import pandas as pd
import json
import os
from datetime import datetime

skip_values = ['Townsmen', "Housing Corp Members", "Last Name", "New Members"]
advisors_position = ['President', "Asst. Chapter Advisor", "Chapter Advisor", "Resident Advisor"]
order = ['Alpha', 'Beta', 'Pi', 'Iota', 'Sigma', 'Tau', 'Chi', 'Theta 1', 'Theta 2', 'Theta 3', 'Upsilon', 'Phi', 'Psi', 'Gamma', 'Asst. Tau', 'Lambda', 'Epsilon']

def get_actives_length(df):
    count = 0
    for _, row in df.iterrows():
        last_name = row.get('Last Name')
        if pd.isna(last_name):
            continue
        last_name_stripped = str(last_name).strip()
        if last_name_stripped == "Housing Corp Members":
            break
        if last_name_stripped not in skip_values:
            count += 1
    return count

def excel_to_json(excel_file):
    df = pd.read_excel(excel_file, header=1)

    actives = []
    advisors = []

    for index, row in df.iterrows():
        if row['Last Name'] in skip_values or pd.isna(row['Last Name']):
            continue

        positions = ([pos.strip() for pos in str(row["Current Office"]).split("/")] if pd.notna(row["Current Office"]) else [])
        majors = row["Major"] if pd.notna(row["Major"]) else ''
        brother = {
            "lastname": row['Last Name'],
            "name": row['First Name'],
            "positions": positions,
            "major": majors,
            "classOf": f"AE {row['Pledge Class']}",
            "hasImg": "false" # Currently has to be set manually. 
        }

        if index <= get_actives_length(df):
            actives.append(brother)
        else:
            if row['Current Office'] in advisors_position:
                advisors.append(brother)
        
    date_str = datetime.now().strftime("%Y")

    def sort_key(brother):
        for pos in brother["positions"]:
            if pos in order:
                return (order.index(pos), "")  # Use empty string to keep name order inside same position
        return (len(order), brother["lastname"].lower())

    actives.sort(key=sort_key)

    output_dir = 'data'
    os.makedirs(output_dir, exist_ok=True)

    file_name = os.path.join(output_dir, f"brothers_{date_str}.json")

    data = {
        "actives": actives,
        "advisors": advisors
    }

    with open(file_name, 'w') as f:
        json.dump(data, f, indent=6)

def main():
    excel_to_json(excel_file='data/AEPKS_Roster.xlsx')

if __name__ == "__main__":
    main()