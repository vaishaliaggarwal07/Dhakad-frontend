import {
  BlockBlobClient,
} from "@azure/storage-blob";
import { v4 as uuidv4 } from 'uuid';

const roundToTwo = (num)=>{
  // return +(Math.round(num + "e+2")  + "e-2");
  return +(num.toFixed(2));
}

const uploadFileInChunkParallel = async (file,sasTokenURL,setProgress=undefined) => {
  try{
    const blobClient = new BlockBlobClient(sasTokenURL);
    const blobUploadOptions = {
      concurrency: 5, // 20 concurrency
      blobHTTPHeaders:{blobContentType:file.type},
      onProgress: function (ev) {
        let progress = roundToTwo((ev.loadedBytes / file.size) * 100);
        if(setProgress && progress>0){
          setProgress(progress)
        }else{
          console.log('uploadFilmToBlob:progress: file progress ',progress);
        }
      }
    };
    await blobClient.uploadData(file,blobUploadOptions)
    /*// const blockIds = [];
    let progress = 0;
    for (let i = 0; i < blockCount; i++) {
      const start = i * blockSize;
      const end = Math.min(start + blockSize, fileSize);
      const chunk = file.slice(start, end);
      const chunkSize = end - start;
      const blockId = encode("block-" + i.toString().padStart(6, "0"));
      blockIds.push(blockId);
      await blobClient.stageBlock(blockId, chunk, chunkSize);
      progress = (i/blockCount)*100
      console.log('uploadFilmToBlob:uploadFilmToBlobInBlocks: progress ',progress);
      if(setProgress){
        setProgress(progress)
      }
    }
    await blobClient.commitBlockList(blockIds);
    await blobClient.setHTTPHeaders();*/
  }catch (e){
    console.error('uploadFilmToBlob:uploadFilmToBlobInBlocks: ',e);
  }

};

/**
 * create complete sas url
 * @param sasResponseObject response object from server api call
 * @param extension extension of the file
 */
const createSASURLWithUUIDV4 = (sasResponseObject,extension)=>{
  const path = `${sasResponseObject.blobServiceUri}/${sasResponseObject.containerName}/${uuidv4()}.${extension}`
  return {
    uploadUrlPath:path,
    sasUrl:`${path}?${sasResponseObject.sasToken}`
  }
}

export default uploadFileInChunkParallel;
export {
  createSASURLWithUUIDV4
}
