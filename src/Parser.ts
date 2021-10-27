export function binToString(data: Uint8Array): string {
  return String.fromCharCode(...data);
}

export function getBoxType(boxData: Uint8Array): string {
  console.log(boxData);
  return binToString(boxData.subarray(4, 8));
}

export function getBoxSize(data: Uint8Array): number {
  return new DataView(data.buffer).getUint32(0);
}

export function getBoxData(data: Uint8Array, size: number) {
  return data.subarray(8, size);
}

export type Box = {
  size: number;
  type: string;
  boxData: Uint8Array;
};

export function getBox(data: Uint8Array): Box {
  const size = getBoxSize(data);
  const type = getBoxType(data);
  const boxData = getBoxData(data, size);

  return { size, type, boxData };
}

export function parseMP4File(fileData: ArrayBuffer) {
  let offset = 0;
  let data = new Uint8Array(fileData);
  let resutlTree = {};
  return resutlTree;
}
