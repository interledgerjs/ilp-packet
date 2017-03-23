export const uuidToBuffer = (uuid: String) => {
  return Buffer.from(uuid.replace(/-/g, ''), 'hex')
}

export const bufferToUuid = (buffer: Buffer) => {
  if (buffer.length !== 16) {
    throw new Error('uuid must be 16 bytes long')
  }

  return buffer.toString('hex').replace(
    /^(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})$/,
    '$1-$2-$3-$4-$5'
  )
}
