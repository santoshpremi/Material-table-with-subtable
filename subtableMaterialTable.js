// deatilPanel with toggle 


<MaterialTable
icons={{
  Edit: () => <EditIcon style={{ color: "1458ff"}} />,
  Delete: () => <DeleteIcon style={{ color: "ff3e4f" }} />,
}}

  title="Albums"
  columns={columns}
  data={data}
  style={{
    
  }}
  options={{
    paging: false,
    headerStyle: {
      position: "sticky",
      backgroundColor: "#edeced",
      top: "0",
      zIndex: 1
    },
    maxBodyHeight: "calc(100vh - 199.27px)",   //table height calculation acc to screen
    
    sorting:true,
    // maxBodyHeight:"450px"
    // search:true,
  }}    

  editable={{
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        const dataUpdate = [...data];
        const index = oldData.tableData.album_id;
        dataUpdate[index] = newData;
        if (typeof newData.stop_time === "object") {
          const time = newData.stop_time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          newData.stop_time = time;
        }
        if (typeof newData.start_time === "object") {
          const time = newData.start_time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          newData.start_time = time;
        }
        update_single_album_data.update(newData).then((response) => {
          if (response.message === "ok") {
            setData([...dataUpdate]);
            getAlbumData()
            resolve();
          } else {
            swal("Oops!", "Something went wrong", "error");
            reject();
          }
        });
      }),
      // onRowAdd: newData =>
      // new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //             setData([...data, newData]);
      //         resolve();
      //     }, 1000);
      // }),
    onRowDelete: (oldData) =>        
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataDelete = [...data];
          const index = oldData.tableData.id;
          dataDelete.splice(index, 1);
          delete_single_album_data
            .remove(`${oldData.id}`)
            .then((response) => {
              if (response.message === "ok") {
                setData([...dataDelete]);
                getAlbumData();
              } else {
                swal("Oops!", "Something went wrong", "error");
                reject();
              }
            })
            .catch((err) => {
              swal("Oops!", "Something went wrong", "error");
              reject();
            });

          resolve();
        }, 1000);
      }),
  }}
  detailPanel={({rowData}) => {
    return (
      <div  style={{  width: '50%' }}>
        <MaterialTable
               columns={subColumns}             
               data={rowData.image_frame_data}                           
               options={{
                 paging: false,
                 toolbar: false,
                 headerStyle: {
                  backgroundColor: "#edeced",
                  position: "sticky",
                  zIndex: 1
                },
                 padding: "dense",
                 maxBodyHeight:"400px"
               }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {           
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.album_id;
                  dataUpdate[index] = newData;
                  console.log(index)
                  update_single_ptz_data.update(newData).then((response) => {
                    if (response.message === "ok") {
                      setData([...dataUpdate]);                     
                      getAlbumData()
                    } else {
                      swal("Oops!", "Something went wrong", "error");
                      reject();
                    }
                  });

                  resolve();
                }, 1000);
              }),

              // onRowAdd: (newData,oldData) =>
              // new Promise((resolve, reject) => {
              //     setTimeout(() => {
              //       console.log(newData)
              //         add_single_ptz_data.create(newData).then((response)=>{
              //           if (response.message ==="ok"){
              //             setData([...data, newData]);
              //             getAlbumData()
              //           }
              //         })
              //         resolve();
              //     }, 1000);
              // }),

              onRowDelete: (oldData) =>        
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  delete_single_ptz_data
                    .remove(`${oldData.id}`)
                    .then((response) => {
                      if (response.message === "ok") {
                        setData([...dataDelete]);
                        getAlbumData()
                      } else {
                        swal("Oops!", "Something went wrong", "error");
                        reject();
                      }
                    })
                    .catch((err) => {
                      swal("Oops!", "Something went wrong", "error");
                      reject();
                    });
    
                  resolve();
                }, 1000);
              }),
          }}
        

        />
           
      </div>
    );
  }}
  onRowClick={(event, rowData, togglePanel) => togglePanel()}
/>


