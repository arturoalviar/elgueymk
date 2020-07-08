import { createSerializer } from 'jest-emotion'
import * as emotion from '@emotion/core'
import '@testing-library/jest-dom'

expect.addSnapshotSerializer(createSerializer(emotion))
