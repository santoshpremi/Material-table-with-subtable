column =[
    {
        field: "start_time",
        title: "Start",
        editComponent: ({rowData, onChange}) => (
        <TextField
          id="time"
          sx={{ width: "100%" }}
          label="start"
          type="time"
          size="small"
          value={rowData.start_time}
          onChange={(e) => onChange(e.target.value)}
          />
        ),
    }
]