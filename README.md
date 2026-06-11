# Dashboard Financiero - DevSecOps Pipeline

[![DevSecOps Pipeline](https://github.com/Njorse/dashboard-devsecops-/actions/workflows/devsecops.yml/badge.svg)](https://github.com/Njorse/dashboard-devsecops-/actions/workflows/devsecops.yml)
[![CodeQL](https://github.com/Njorse/dashboard-devsecops-/actions/workflows/codeql.yml/badge.svg)](https://github.com/Njorse/dashboard-devsecops-/actions/workflows/codeql.yml)

Dashboard financiero con pipeline DevSecOps completo: analisis de seguridad estatico, escaneo de dependencias, pruebas automatizadas y despliegue continuo.

## Pipeline

| Etapa | Herramienta | Proposito |
|---|---|---|
| Lint | ESLint | Calidad de codigo |
| Test | Vitest | Pruebas unitarias |
| SCA | Snyk + npm audit | Vulnerabilidades en dependencias |
| SAST | TruffleHog | Credenciales expuestas |
| SAST | CodeQL | Analisis estatico de seguridad |
| Deploy | GitHub Pages | Publicacion automatica |

## Demo

Sitio en vivo: https://njorse.github.io/dashboard-devsecops-/
