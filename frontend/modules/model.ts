import { Command } from '@tauri-apps/api/shell'
import { initModel } from '~/view'

export const install = async () => {
  const command = Command.sidecar('node-bin/backend')
  command.on('close', (data) => {
    console.log(
      `Node backend finished 