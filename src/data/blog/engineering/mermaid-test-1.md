---
author: Gustavo Salvini
pubDatetime: 2025-04-09T16:45:39.660Z
modDatetime: 2025-04-09T16:45:39.660Z
title: Testing Mermaid diagrams
featured: true
hideEditPost: true
draft: false
tags:
  - Mermaid
description: Testing Mermaid diagrams in Astro with remark/rehype plugins.
---

# Mermaid test

```mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
```

## Arquitectura de Persistencia

```mermaid
graph TD
    subgraph "Zustand Store"
        A[Store] --> B[Persist Middleware]
        B --> C[Store Updates]
    end
    
    subgraph "LocalStorage"
        D[Storage Key] --> E[Serialized State]
        E --> F[Version Control]
    end
    
    B --> D
    E --> B
```
