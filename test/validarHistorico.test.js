import assert from 'node:assert/strict'
import test from 'node:test'
import { validarHistorico } from '../src/utils/validarHistorico.js'

function criarHistorico(registro = {}) {
  return { versao_schema: 1, projeto: 'JOVI MATH', exportado_em: '2026-10-30T20:00:00-03:00', registros: [{ id: 'exemplo-001', expressao: '5/2', resultado_exato: '5/2', resultado_formatado: '2.50', origem: 'digitado', data_hora: '2026-10-30T19:59:00-03:00', explicacao: null, ...registro }] }
}

test('aceita histórico válido e resultados arredondados', () => {
  assert.equal(validarHistorico(criarHistorico()).valido, true)
  assert.equal(validarHistorico(criarHistorico({ resultado_exato: '-1/8', resultado_formatado: '-0.13' })).valido, true)
  assert.equal(validarHistorico(criarHistorico({ resultado_exato: '-1/1000', resultado_formatado: '0.00' })).valido, true)
})

test('rejeita contratos, datas, expressões e frações inválidas', () => {
  assert.equal(validarHistorico({ ...criarHistorico(), extra: true }).valido, false)
  assert.equal(validarHistorico(criarHistorico({ expressao: '01+2' })).valido, false)
  assert.equal(validarHistorico(criarHistorico({ resultado_exato: '10/4', resultado_formatado: '2.50' })).valido, false)
  assert.equal(validarHistorico(criarHistorico({ data_hora: '2026-02-29T19:59:00-03:00' })).valido, false)
})

test('rejeita IDs repetidos e explicações maiores que o limite', () => {
  const duplicado = criarHistorico()
  duplicado.registros.push({ ...duplicado.registros[0] })
  assert.equal(validarHistorico(duplicado).valido, false)
  assert.equal(validarHistorico(criarHistorico({ explicacao: ''.repeat(2001) })).valido, false)
})

test('aceita textos no limite e todas as origens', () => {
  assert.equal(validarHistorico(criarHistorico({ origem: 'camera', explicacao: ''.repeat(2000) })).valido, true)
  assert.equal(validarHistorico(criarHistorico({ origem: 'imagem', explicacao: `${'a'.repeat(1999)}` })).valido, true)
  assert.equal(validarHistorico(criarHistorico({ origem: 'digitado', explicacao: '<strong>texto</strong>' })).valido, true)
})

test('rejeita texto e campos fora do contrato', () => {
  assert.equal(validarHistorico(criarHistorico({ explicacao: '\u0000' })).valido, false)
  assert.equal(validarHistorico(criarHistorico({ explicacao: '\ud800' })).valido, false)
  assert.equal(validarHistorico(criarHistorico({ versao_schema: '1' })).valido, false)
  assert.equal(validarHistorico(criarHistorico({ versao_schema: 2 })).valido, false)
  assert.equal(validarHistorico(criarHistorico({ data_hora: '2024-02-29T19:59:00Z' })).valido, true)
  assert.equal(validarHistorico(criarHistorico({ data_hora: '2024-02-30T19:59:00Z' })).valido, false)
  assert.equal(validarHistorico(criarHistorico({ data_hora: '2026-10-30T19:59:00+24:00' })).valido, false)
})
