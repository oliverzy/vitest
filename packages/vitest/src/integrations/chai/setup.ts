import chai from 'chai'
import Subset from 'chai-subset'
import { SnapshotPlugin } from '../snapshot/chai'
import { JestExtend } from './jest-extend'
import { JestChaiExpect } from './jest-expect'

let installed = false
export async function setupChai() {
  if (installed)
    return

  chai.use(JestExtend())
  chai.use(JestChaiExpect())
  chai.use(Subset)
  chai.use(SnapshotPlugin())
  installed = true
}