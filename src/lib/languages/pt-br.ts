export const ptBr = {
  api: {
    errors: {
      createAccount: 'Falha ao criar conta',
      failedToChangeStatus: 'Falha ao alterar status',
      failedToUpdate: 'Falha ao atualizar',
      failedToCreateBillingPlan: 'Falha ao criar plano de faturamento',
      associateCurrency: 'Falha ao associar moeda',
      failedToCreateAccountRule: 'Falha ao criar regra de conta',
      failedToCreateTransaction: 'Falha ao criar transação',
      failedFetchingData: 'Falha ao buscar dados',
      failedToCreateExecution: 'Falha ao criar execução',
      failedToCreateBalance: 'Falha ao criar balanço',
      failedToCreateUser: 'Falha ao criar usuário',
      login: 'Falha ao entrar na sua conta',
      sessionExpired: 'A sessão expirou, faça login novamente'
    }
  },
  menu: {
    sidebar: {
      setup: {
        title: 'Configuração',
        domain: 'Domínio',
        accountRules: 'Regras de Conta',
        chartOfAccounts: 'Plano de Contas',
        executionRules: 'Regras de Execução',
        authorizationRules: 'Regras de Autorização',
        billingPlan: 'Plano de Cobrança'
      },
      register: {
        title: 'Registro',
        currencies: 'Moedas',
        accounts: 'Contas'
      },
      operation: {
        title: 'Operação',
        execution: 'Execução',
        authorization: 'Autorização',
        split: 'Divisão',
        balanceSheet: 'Balanço'
      },
      core: {
        title: 'Núcleo',
        balance: 'Saldo',
        transaction: 'Transação',
        customer: 'Consumidores',
        statement: 'Extrato'
      },
      genial: {
        title: 'Genial',
        statement: 'Extrato'
      },
      card: {
        title: 'Cartões',
        preApprovedLimit: 'Crédito pré-aprovado',
        request: 'Solicitações de cartão'
      },
      whitelist: {
        title: 'Whitelist',
        manage: 'Gerenciar whitelist',
        upload: 'Criar whitelist em massa'
      },
      settings: {
        title: 'Ajustes',
        users: 'Usuários'
      },
      logout: 'Sair'
    }
  },
  modal: {
    message: {
      title: 'Mensagem',
      ok: 'ok'
    },
    confirmation_modal: {
      buttons: {
        cancel: 'Cancelar'
      }
    }
  },
  date: {
    dateOnly: 'MM/DD/YYYY'
  },
  commons: {
    fields: {
      true: 'Verdadeiro',
      TRUE: 'VERDADEIRO',
      false: 'Falso',
      FALSE: 'FALSO'
    },
    language: 'Idioma',
    actions: 'Ações'
  },
  users: {
    title: 'Usuários',
    modal: {
      changePassword: {
        title: 'Resetar Senha',
        form: {
          description: 'Você irá resetar a senha do usuário. Tem certeza?',
          password: 'Senha',
          saveButton: 'Confirmar',
          cancelButton: 'Cancelar'
        },
        success: 'Nova senha: '
      }
    },
    table: {
      id: 'ID',
      name: 'Nome',
      email: 'Email',
      role: 'Função',
      status: 'Status',
      createdAt: 'Criado em'
    },
    form: {
      insertButton: 'Inserir',
      name: 'Nome',
      email: 'Email',
      role: 'Função',
      password: 'Senha',
      missingField: 'Por favor preencha todos os campos!'
    }
  },
  core: {
    cardPreApprovedLimit: {
      errors: {
        failedToCreate: 'Falha ao criar crédito pré-aprovado'
      },
      title: 'Crédito pré-aprovado',
      new: 'Novo crédito pré-aprovado',
      table: {
        tooltip: {
          renew: 'Renovar',
          cancel: 'Cancelar'
        }
      },
      modal: {
        renew: {
          title: 'Renovar Crédito Pré-Aprovado',
          confirmActionText: 'Confirmar',
          descriptionText:
            'Tem certeza que deseja renovar o crédito pré-aprovado?'
        },
        cancel: {
          title: 'Cancelar Crédito Pré-Aprovado',
          confirmActionText: 'Confirmar',
          descriptionText:
            'Tem certeza que deseja cancelar o crédito pré-aprovado?'
        },
        newCardPreApprovedLimitTitle: 'Novo crédito pré-aprovado',
        form: {
          taxId: 'Documento',
          value: 'Valor',
          type: 'Tipo',
          name: 'Nome',
          phone: 'Telefone',
          email: 'Email',
          comment: 'Observações',
          errors: {
            valueMustBeFilled: 'Valor é obrigatório',
            taxIdMustBeFilled: 'Documento é obrigatório',
            invalidTaxId: 'Documento inválido',
            typeMustBeFilled: 'Tipo é obrigatório',
            valueMustBeANumber: 'Valor precisa ser um número',
            invalidPhoneNumber: 'Telefone inválido',
            invalidEmail: 'Email inválido'
          },
          saveButton: 'Salvar',
          cancelButton: 'Cancelar'
        }
      }
    },
    whitelist: {
      new: 'Novo Registro',
      delete: 'Deletar',
      update: 'Atualizar'
    },
    balance: {
      title: 'Balanço',
      modal: {
        newBalance: 'Novo Balanço Criado',
        balanceID: 'ID do Balanço'
      },
      form: {
        currency: 'Moeda',
        id: 'ID',
        searchButton: 'Buscar',
        newBalanceButton: 'Novo Balanço',
        journalButton: 'Diário',
        amount: 'Quantidade',
        seqNum: 'Seq Num',
        createdAt: 'Criado em'
      }
    },
    transaction: {
      title: 'Transação',
      newTransactionButton: 'Nova Transação',
      form: {
        id: 'ID',
        type: 'Tipo',
        currency: 'Moeda',
        amount: 'Quantidade',
        createdAt: 'Criado em',
        searchButton: 'Buscar',
        resetButton: 'Redefinir'
      },
      modal: {
        newTransaction: {
          title: 'Nova Transação',
          modal: {
            title: 'Transação Criada',
            transactionId: 'ID da Transação',
            okButton: 'OK'
          },
          table: {
            transactionType: 'Tipo de Transação',
            settledAt: 'Assentado em',
            parentTransactionID: 'ID da Transação Pai',
            externalId: 'ID Externo',
            entryType: 'Tipo de Entrada',
            entryOrder: 'Ordem de Entrada',
            currency: 'Moeda',
            amount: 'Quantidade',
            debitBalanceId: 'ID do Saldo Debitado',
            debitBalanceValidation: 'Validação de Saldo Debitado',
            creditBalanceID: 'ID do Saldo Creditado',
            creditBalanceValidation: 'Validação de Saldo Creditado'
          },
          form: {
            transactionType: 'Tipo de Transação',
            settledAt: 'Assentado em',
            parentTransactionID: 'ID da Transação Pai',
            externalId: 'ID Externo',
            entryType: 'Tipo de Entrada',
            entryOrder: 'Ordem de Entrada',
            currency: 'Moeda',
            amount: 'Quantidade',
            debitBalanceId: 'ID do Saldo Debitado',
            debitBalanceValidation: 'Validação de Saldo Debitado',
            creditBalanceID: 'ID do Saldo Creditado',
            creditBalanceValidation: 'Validação de Saldo Creditado',
            insertButton: 'Inserir',
            saveButton: 'Salvar',
            cancelButton: 'Cancelar',
            modal: {
              transactionCreated: {
                title: 'Transação Criada',
                transactionId: 'ID da Transação',
                okButton: 'OK'
              }
            }
          }
        },
        entry: {
          title: 'Entradas',
          id: 'ID',
          transactionId: 'ID da Transação',
          transactionType: 'Tipo de Transação',
          order: 'Ordem',
          type: 'Tipo',
          currency: 'Moeda',
          amount: 'Quantidade',
          debitBalanceId: 'ID do Saldo Debitado',
          debitBalanceAfter: 'Saldo Debitado Após',
          debitBalanceSeqNum: 'Seq Num do Saldo Debitado',
          creditBalanceId: 'ID do Saldo Creditado',
          creditBalanceAfter: 'Saldo Creditado Após',
          creditBalanceSeqNum: 'Seq Num do Saldo Creditado',
          createdAt: 'Criado em',
          settledAt: 'Assentado em',
          parentTransactionId: 'ID da Transação Pai',
          externalID: 'ID Externo',
          closeButton: 'Fechar'
        }
      },
      table: {
        id: 'ID',
        type: 'Tipo',
        currency: 'Moeda',
        amount: 'Quantidade',
        createdAt: 'Criado em',
        externalID: 'ID Externo',
        parentId: 'ID do Pai'
      }
    },
    statement: {
      title: 'Extrato core',
      form: {
        id: 'Id da conta',
        dateRange: 'Período',
        searchButton: 'Buscar'
      },
      table: {
        date: 'Data/hora',
        transactionType: 'Tipo da transação',
        detail: 'Detalhe',
        transactionId: 'Id da transação',
        amount: 'Valor',
        balanceAfter: 'Saldo posterior'
      },
      details: {
        title: 'Detalhes do extrato',
        id: 'Id',
        type: 'Tipo',
        transaction_id: 'Id da transação',
        transaction_type: 'Tipo da transação',
        entry_id: 'Id da entrada',
        entry_type: 'Tipo da entrada',
        entry_order: 'Ordem da entrada',
        amount: 'Valor',
        balance_after: 'Saldo final',
        balance_seq_num: 'Sequenciador do saldo',
        created_at: 'Criado em',
        settled_at: 'Confirmado em',
        parent_transaction_id: 'Id da transação pai',
        external_id: 'Id externo',
        meta_data: 'MetaData'
      }
    }
  },
  register: {
    card_pre_approved_limit: {
      title: 'Crédito Pré-Aprovado',
      newCustomer: 'Novo Crédito',
      emptyMessage: 'Nenhum crédito pré-aprovado encontrado',
      object: {
        type: {
          person: 'PF',
          company: 'PJ'
        }
      },
      filters: {
        id: 'ID',
        tax_id: 'Documento',
        searchButton: 'Filtrar',
        resetButton: 'Limpar filtros',
        type: 'Tipo'
      },
      table: {
        id: 'ID',
        created_at: 'Criado em',
        expires_at: 'Expira em',
        updated_at: 'Última atualização',
        tax_id: 'Documento',
        value: 'Valor',
        status: 'Status'
      },
      pages: {
        details: {
          title: 'Detalhes do Consumidor'
        }
      }
    },
    uploadWhitelist: {
      title: 'Criar Whitelist em Massa',
      description:
        'Baixe e utilize nosso arquivo de modelo para enviar dados em massa para a whitelist.',
      template: {
        title: 'Arquivo de modelo',
        description: 'Clique no botão abaixo para baixar o modelo',
        download: 'Baixar modelo'
      },
      upload: {
        title: 'Enviar whitelist',
        description:
          'Clique no botão abaixo para enviar o arquivo de whitelist preenchido, respeitando as colunas do arquivo de modelo',
        upload: 'Enviar arquivo',
        drag: 'Arraste ou clique aqui para enviar um arquivo',
        drop: 'Solte para enviar seu arquivo',
        submit: 'Enviar'
      }
    },
    whitelist: {
      title: 'Whitelist',
      modal: {
        update: {
          title: 'Atualizar registro'
        },
        create: {
          title: 'Criar registro'
        },
        delete: {
          title: 'Deletar registro',
          confirmAction: 'Deletar',
          description: 'Esta ação não poderá ser desfeita'
        }
      },
      table: {
        name: 'Nome',
        tax_id: 'Documento'
      },
      filters: {
        name: 'Nome',
        tax_id: 'Documento',
        searchButton: 'Filtrar',
        resetButton: 'Limpar filtros'
      },
      form: {
        tax_id: {
          label: 'Documento',
          required: 'Este campo é obrigatório',
          format_error: 'O CPF informado é inválido'
        },
        name: {
          required: 'Este campo é obrigatório',
          label: 'Nome'
        },
        type: {
          required: 'Este campo é obrigatório',
          label: 'Tipo'
        },
        typeOptions: [
          { value: 'customer', label: 'Cliente' },
          { value: 'employee', label: 'Funcionário' },
          { value: 'investor', label: 'Investidor' }
        ],
        edit: 'Atualizar',
        create: 'Criar',
        cancel: 'Cancelar'
      },
      emptyMessage: 'Nenhum registro encontrado'
    },
    customer: {
      title: 'Consumidores',
      newCustomer: 'Novo Consumidor',
      emptyMessage: 'Nenhum consumidor encontrado',
      object: {
        type: {
          person: 'PF',
          company: 'PJ'
        },
        status: {
          active: 'Ativo',
          blocked: 'Bloqueado',
          denied: 'Negado',
          closed: 'Fechado',
          waiting_approval: 'Aguardando aprovação',
          waiting_customer: 'Aguardando cliente',
          waiting_provider_approval: 'Aguardando aprovação do provedor',
          error: 'Erro'
        }
      },
      filters: {
        searchButton: 'Filtrar',
        resetButton: 'Limpar filtros',
        type: 'Tipo',
        id: 'ID',
        name: 'Nome | Fantasia | Razão Social',
        tax_id: 'Documento',
        status: 'Status'
      },
      table: {
        id: 'ID',
        created_at: 'Criado em',
        updated_at: 'Última atualização',
        deleted_at: 'Excluído em',
        type: 'Tipo',
        name: 'Nome',
        tax_id: 'Documento',
        status: 'Status',
        metadata: 'Metadados',
        provider_id: 'provider_id',
        referral_code: 'Código de indicação',
        has_alias_account: 'has_alias_account',
        company_name: 'company_name',
        company_trading_name: 'company_trading_name'
      },
      pages: {
        details: {
          title: 'Detalhes do Consumidor'
        }
      }
    },
    account: {
      pages: {
        balanceJournal: {
          title: 'Diário de Balanço',
          accountBalance: 'Balanço da Conta',
          form: {
            searchButton: 'Buscar',
            balanceID: 'ID do Balanço',
            currency: 'Moeda',
            period: 'Período'
          },
          table: {
            createdAt: 'Criado em',
            transactionType: 'Tipo de Transação',
            entryType: 'Tipo de Entrada',
            externalID: 'ID Externo',
            amount: 'Quantidade',
            balanceAfter: 'Balanço Após',
            seqNum: 'Seq Num',
            details: 'Detalhes'
          },
          exportButton: 'Exportar'
        },
        accountBalance: {
          title: 'Balanço da Conta',
          associateCurrencyButton: 'Associar Moeda',
          form: {
            accountID: 'ID da Conta',
            accountDescription: 'Descrição da Conta',
            accountType: 'Tipo de Conta',
            accountCodeNumber: 'Número do Código da Conta',
            billingPlan: 'Plano de Faturamento'
          },
          table: {
            balanceId: 'ID do Balanço',
            balanceType: 'Tipo de Balanço',
            currency: 'Moeda',
            amount: 'Quantidade',
            seqNum: 'Seq Num',
            createdAt: 'Criado em',
            journal: 'Diário'
          }
        }
      },
      form: {
        id: 'ID',
        description: 'Descrição',
        type: 'Tipo',
        codeNumber: 'Número do Código',
        billingPlan: 'Plano de Faturamento',
        searchButton: 'Buscar',
        resetButton: 'Redefinir'
      },
      modal: {
        accountCreated: {
          title: 'Conta Criada',
          label: 'ID da Conta',
          okButton: 'OK'
        },
        changeAccountBillingPlan: {
          title: 'Alterar Plano de Faturamento da Conta',
          form: {
            accountID: 'ID da Conta',
            billingPlan: 'Plano de Faturamento',
            saveButton: 'Salvar',
            cancelButton: 'Cancelar'
          }
        },
        associateCurrency: {
          form: {
            accountID: 'ID da Conta',
            currency: 'Moeda',
            insertButton: 'Inserir',
            table: {
              remove: 'Remover',
              currency: 'Moeda'
            },
            saveButton: 'Salvar',
            cancelButton: 'Cancelar'
          }
        },
        journalDetails: {
          title: 'Detalhes do Diário',
          table: {
            field: 'Campo',
            value: 'Valor',
            fields: {
              id: 'ID',
              balance_id: 'ID do Balanço',
              type: 'Tipo',
              transaction_id: 'ID da Transação',
              transaction_type: 'Tipo de Transação',
              entry_id: 'ID da Entrada',
              entry_type: 'Tipo de Entrada',
              entry_order: 'Ordem de Entrada',
              currency: 'Moeda',
              amount: 'Quantidade',
              balance_after: 'Balanço Após',
              seq_num: 'Seq Num',
              settled_at: 'Assentado em',
              created_at: 'Criado em',
              parent_transaction_id: 'ID da Transação Pai',
              external_id: 'ID Externo'
            },
            closeButton: 'Fechar'
          }
        },
        newAccount: {
          error: {
            currencyAlreadyAdded: 'Moeda já adicionada'
          },
          title: 'Nova Conta',
          description: 'Descrição',
          billingPlan: 'Plano de Faturamento',
          currency: 'Moeda',
          insertButton: 'Inserir',
          table: {
            currency: 'Moeda',
            remove: 'Remover'
          },
          createButton: 'Criar',
          cancelButton: 'Cancelar'
        }
      },
      title: 'Conta',
      newAccount: 'Nova Conta',
      table: {
        id: 'ID',
        description: 'Descrição',
        type: 'Tipo',
        codeNumber: 'Número do Código',
        billingPlan: 'Plano de Faturamento',
        createdAt: 'Criado em',
        actions: 'Ações'
      }
    },
    currency: {
      table: {
        code: 'Código',
        name: 'Nome',
        decimals: 'Decimais',
        createdAt: 'Criado em'
      },
      newCurrency: 'Nova Moeda',
      title: 'Moeda',
      modal: {
        newCurrency: {
          title: 'Nova Moeda',
          form: {
            code: 'Código',
            name: 'Nome',
            decimals: 'Decimais',
            confirmButton: 'Confirmar',
            cancelButton: 'Cancelar'
          }
        }
      }
    },
    cardRequest: {
      title: 'Solicitações de Cartão',
      modal: {
        deny: {
          title: 'Reprovar solicitação de cartão'
        },
        approve: {
          title: 'Aprovar solicitação de cartão'
        },
        reprocess: {
          title: 'Reprocessar solicitação de cartão',
          description:
            'Deseja realmente reprocessar essa solicitação de cartão? Essa ação não poderá ser desfeita.',
          confirmAction: 'Sim, reprocessar'
        }
      },
      form: {
        limit: {
          label: 'Limite',
          required: 'Este campo é obrigatório',
          placeholder: 'Informe o limite (máximo R$ 500.000,00)',
          minValue: 'O valor mínimo é de R$ 1,00',
          maxValue: 'O valor máximo é de R$ 500.000,00'
        },
        error_reason: {
          label: 'Motivo',
          required: 'Este campo é obrigatório',
          placeholder: 'Informe o motivo da reprovação'
        },
        approve: 'Aprovar',
        deny: 'Reprovar',
        cancel: 'Voltar'
      },
      table: {
        id: 'Identificador do pedido',
        created_at: 'Data do pedido',
        name: 'Usuário solicitante',
        status: 'Status'
      },
      filters: {
        name: 'Nome',
        tax_id: 'Documento',
        status: 'Status',
        statusOptions: [
          { value: 'active', label: 'Ativo' },
          { value: 'waiting_analysis', label: 'Aguardando análise' },
          { value: 'denied', label: 'Negado' },
          { value: 'approved', label: 'Aprovado' }
        ],
        searchButton: 'Filtrar',
        resetButton: 'Limpar filtros'
      },
      emptyMessage: 'Nenhuma solicitação encontrada',
      tooltip: {
        approve: 'Aprovar',
        deny: 'Reprovar',
        reprocess: 'Reprocessar'
      }
    }
  },
  setup: {
    billingPlan: {
      errors: {
        failedToCreateBillingPlan: 'Falha ao criar plano de faturamento'
      },
      title: 'Plano de Faturamento',
      newPlan: 'Novo Plano',
      table: {
        billingPlan: {
          id: 'ID',
          name: 'Nome',
          createdAt: 'Criado em',
          details: 'Detalhes'
        }
      },
      modal: {
        newBillingPlanTitle: 'Novo Plano de Faturamento',
        billingPlanDetailsTitle: 'Plano de Faturamento',
        form: {
          errors: {
            decimalMustBeANumber: 'Decimal deve ser um número',
            nameMustBeFilled: 'Nome deve ser preenchido',
            transactionsMustBeFilled: 'Transações devem ser preenchidas'
          },
          name: 'Nome',
          decimals: 'Decimais',
          transactionType: 'Tipo de Transação',
          entryType: 'Tipo de Entrada',
          amountType: {
            title: 'Tipo de Quantidade',
            value: 'Valor',
            percentage: 'Porcentagem'
          },
          amount: 'Quantidade',
          insertButton: 'Inserir',
          saveButton: 'Salvar',
          cancelButton: 'Cancelar',
          closeButton: 'Fechar',
          deleteButton: 'Excluir'
        },
        table: {
          transactionType: 'Tipo de Transação',
          entryType: 'Tipo de Entrada',
          amountType: 'Tipo de Quantidade',
          amount: 'Quantidade',
          remove: 'Remover'
        },
        created: {
          title: 'Plano de Faturamento Criado',
          label: 'ID do Plano de Faturamento',
          okButton: 'OK'
        }
      }
    },
    authorizationRules: {
      title: 'Regras de Autorização',
      newRule: 'Nova Regra',
      table: {
        authorizationRules: {
          transactionType: 'Tipo de Transação',
          paramAccount1: 'Parametro Conta 1',
          paramAccount2: 'Parametro Conta 2',
          details: 'Detalhes'
        }
      },
      modal: {
        authorizationRuleDetails: {
          errors: {
            entryAlreadyExists: 'Entrada já existe'
          },
          title: 'Detalhes da Regra de Autorização',
          form: {
            authorizationFormTitle: 'Autorização',
            confirmationFormTitle: 'Confirmação',
            transactionType: 'Tipo de Transação',
            paramAccount1: 'Parametro Conta 1',
            paramAccount2: 'Parametro Conta 2',
            entryType: 'Tipo de Entrada',
            entryOrder: 'Ordem de Entrada',
            debitAccountSource: 'Conta de Débito Origem',
            debitAccountDescription: 'Descrição da Conta de Débito',
            debitBalanceType: 'Tipo de Saldo de Débito',
            debitBalanceValidation: 'Validação do Saldo de Débito',
            creditAccountSource: 'Conta de Crédito Origem',
            creditAccountDescription: 'Descrição da Conta de Crédito',
            creditBalanceType: 'Tipo de Saldo de Crédito',
            creditBalanceValidation: 'Validação do Saldo de Crédito',
            insertButton: 'Inserir',
            modal: {
              title: 'Excluir Regra de Autorização?',
              confirmButton: 'Confirmar',
              cancelButton: 'Cancelar'
            }
          },
          table: {
            entryType: 'Tipo de Entrada',
            entryOrder: 'Ordem de Entrada',
            debitAccountSource: 'Conta de Débito Origem',
            debitAccountDescription: 'Descrição da Conta de Débito',
            debitBalanceType: 'Tipo de Saldo de Débito',
            debitBalanceValidation: 'Validação do Saldo de Débito',
            creditAccountSource: 'Conta de Crédito Origem',
            creditAccountDescription: 'Descrição da Conta de Crédito',
            creditBalanceType: 'Tipo de Saldo de Crédito',
            creditBalanceValidation: 'Validação do Saldo de Crédito'
          },
          deleteButton: 'Excluir',
          saveButton: 'Salvar',
          cancelButton: 'Cancelar'
        },
        newAuthorizationRule: {
          title: 'Nova Regra de Autorização',
          form: {
            authorizationFormTitle: 'Autorização',
            confirmationFormTitle: 'Confirmação',
            transactionType: 'Tipo de Transação',
            paramAccount1: 'Parametro Conta 1',
            paramAccount2: 'Parametro Conta 2',
            entryType: 'Tipo de Entrada',
            entryOrder: 'Ordem de Entrada',
            debitAccountSource: 'Conta de Débito Origem',
            debitAccountDescription: 'Descrição da Conta de Débito',
            debitBalanceType: 'Tipo de Saldo de Débito',
            debitBalanceValidation: 'Validação do Saldo de Débito',
            creditAccountSource: 'Conta de Crédito Origem',
            creditAccountDescription: 'Descrição da Conta de Crédito',
            creditBalanceType: 'Tipo de Saldo de Crédito',
            creditBalanceValidation: 'Validação do Saldo de Crédito',
            insertButton: 'Inserir',
            updateButton: 'Atualizar',
            errors: {
              confirmationEntryOrderMustBeInSequence:
                'Ordem de entrada de confirmação deve ser em sequência',
              authorizationEntryOrderMustBeInSequence:
                'Ordem de entrada de autorização deve ser em sequência'
            }
          },
          table: {
            transactionType: 'Tipo de Transação',
            paramAccount1: 'Parametro Conta 1',
            paramAccount2: 'Parametro Conta 2',
            entryType: 'Tipo de Entrada',
            entryOrder: 'Ordem de Entrada',
            debitAccountSource: 'Conta de Débito Origem',
            debitAccountDescription: 'Descrição da Conta de Débito',
            debitBalanceType: 'Tipo de Saldo de Débito',
            debitBalanceValidation: 'Validação do Saldo de Débito',
            creditAccountSource: 'Conta de Crédito Origem',
            creditAccountDescription: 'Descrição da Conta de Crédito',
            creditBalanceType: 'Tipo de Saldo de Crédito',
            creditBalanceValidation: 'Validação do Saldo de Crédito',
            remove: 'Remover'
          },
          saveButton: 'Salvar',
          cancelButton: 'Cancelar'
        }
      }
    },
    accountRules: {
      title: 'Regras de Conta',
      table: {
        accountRules: {
          description: 'Descrição',
          unique: 'Único',
          availableBalance: 'Saldo Disponível',
          pendingBalance: 'Saldo Pendente',
          blockedBalance: 'Saldo Bloqueado',
          remove: 'Remover'
        }
      },
      modal: {
        errors: {
          selectTransactionTypeAndEntryType:
            'Por favor, selecione o tipo de transação e tipo de entrada',
          accountRuleAlreadyExists: 'Regra de conta já existe',
          descriptionAlreadyExists: 'Descrição já existe'
        },
        title: 'Excluir Regra de Conta?',
        confirmButton: 'Confirmar',
        cancelButton: 'Cancelar'
      },
      form: {
        accountRules: {
          description: {
            title: 'Descrição',
            placeholder: 'Insira uma descrição'
          },
          unique: {
            title: 'Único',
            true: 'VERDADEIRO',
            false: 'FALSO'
          },
          balanceType: {
            title: 'Tipo de Saldo',
            available: 'Disponível',
            pending: 'Pendente',
            blocked: 'Bloqueado'
          },
          insertRule: 'Inserir Regra',
          submitButton: 'Salvar'
        }
      }
    },
    executionRules: {
      title: 'Regras de Execução',
      newRule: 'Nova Regra',
      errors: {
        exectutionRuleAlreadyExists: 'Regra de execução já existe',
        entryOrderMustBeInSequence: 'Ordem de entrada deve estar em sequência'
      },
      table: {
        executionRules: {
          transactionType: 'Tipo de Transação',
          paramAccount1: 'Parametro Conta 1',
          paramAccount2: 'Parametro Conta 2',
          details: 'Detalhes'
        }
      },
      modal: {
        executionRuleDetails: {
          title: 'Detalhes da Regra de Execução',
          form: {
            transactionType: 'Tipo de Transação',
            paramAccount1: 'Parametro Conta 1',
            paramAccount2: 'Parametro Conta 2',
            entryType: 'Tipo de Entrada',
            entryOrder: 'Ordem de Entrada',
            debitAccountSource: 'Conta de Débito Origem',
            debitAccountDescription: 'Descrição da Conta de Débito',
            debitBalanceType: 'Tipo de Saldo de Débito',
            debitBalanceValidation: 'Validação do Saldo de Débito',
            creditAccountSource: 'Conta de Crédito Origem',
            creditAccountDescription: 'Descrição da Conta de Crédito',
            creditBalanceType: 'Tipo de Saldo de Crédito',
            creditBalanceValidation: 'Validação do Saldo de Crédito',
            insertButton: 'Inserir',
            modal: {
              title: 'Excluir Regra de Execução?',
              confirmButton: 'Confirmar',
              cancelButton: 'Cancelar'
            }
          },
          table: {
            entryType: 'Tipo de Entrada',
            entryOrder: 'Ordem de Entrada',
            debitAccountSource: 'Conta de Débito Origem',
            debitAccountDescription: 'Descrição da Conta de Débito',
            debitBalanceType: 'Tipo de Saldo de Débito',
            debitBalanceValidation: 'Validação do Saldo de Débito',
            creditAccountSource: 'Conta de Crédito Origem',
            creditAccountDescription: 'Descrição da Conta de Crédito',
            creditBalanceType: 'Tipo de Saldo de Crédito',
            creditBalanceValidation: 'Validação do Saldo de Crédito'
          },
          deleteButton: 'Excluir',
          saveButton: 'Salvar',
          cancelButton: 'Cancelar'
        },
        newExecutionRule: {
          title: 'Nova Regra de Execução',
          form: {
            transactionType: 'Tipo de Transação',
            paramAccount1: 'Parametro Conta 1',
            paramAccount2: 'Parametro Conta 2',
            entryType: 'Tipo de Entrada',
            entryOrder: 'Ordem de Entrada',
            debitAccountSource: 'Conta de Débito Origem',
            debitAccountDescription: 'Descrição da Conta de Débito',
            debitBalanceType: 'Tipo de Saldo de Débito',
            debitBalanceValidation: 'Validação do Saldo de Débito',
            creditAccountSource: 'Conta de Crédito Origem',
            creditAccountDescription: 'Descrição da Conta de Crédito',
            creditBalanceType: 'Tipo de Saldo de Crédito',
            creditBalanceValidation: 'Validação do Saldo de Crédito',
            insertButton: 'Inserir',
            updateButton: 'Atualizar'
          },
          table: {
            transactionType: 'Tipo de Transação',
            paramAccount1: 'Parametro Conta 1',
            paramAccount2: 'Parametro Conta 2',
            entryType: 'Tipo de Entrada',
            entryOrder: 'Ordem de Entrada',
            debitAccountSource: 'Conta de Débito Origem',
            debitAccountDescription: 'Descrição da Conta de Débito',
            debitBalanceType: 'Tipo de Saldo de Débito',
            debitBalanceValidation: 'Validação do Saldo de Débito',
            creditAccountSource: 'Conta de Crédito Origem',
            creditAccountDescription: 'Descrição da Conta de Crédito',
            creditBalanceType: 'Tipo de Saldo de Crédito',
            creditBalanceValidation: 'Validação do Saldo de Crédito',
            remove: 'Remover'
          },
          saveButton: 'Salvar',
          cancelButton: 'Cancelar'
        }
      }
    },
    chartOfAccounts: {
      errors: {
        selectTransactionAndEntryType:
          'Please select transaction and entry type',
        codeNumberShouldBeANumber: 'Code number should be a number',
        parentCodeNumberShouldBeANumber:
          'Parent code number should be a number',
        accountRuleAlreadyExists: 'Account rule already exists',
        nameAlreadyExists: 'Name already exists'
      },
      title: 'Chart of Accounts',
      table: {
        chartOfAccounts: {
          description: 'Descrição',
          balanceType: 'Tipo de Saldo',
          accountType: 'Tipo de Conta',
          codeNumber: 'Numero do Código',
          parentCodeNumber: 'Numero do Código Pai',
          remove: 'Remove'
        }
      },
      form: {
        chartOfAccounts: {
          description: {
            title: 'Descrição',
            placeholder: 'Enter a description'
          },
          balanceType: {
            title: 'Tipo de Saldo',
            placeholder: 'Select a balance type',
            options: {
              available: 'Disponível',
              pending: 'Pendente',
              blocked: 'Bloqueado'
            }
          },
          type: {
            title: 'Tipo',
            placeholder: 'Selecione um tipo',
            options: {
              asset: 'Ativo',
              liability: 'Passivo',
              equity: 'Patrimônio líquido',
              revenue: 'Receita',
              expense: 'Despesa'
            }
          },
          codeNumber: {
            title: 'Número do Código',
            placeholder: 'Digite um número de código'
          },
          parentCodeNumber: {
            title: 'Número do Código Pai',
            placeholder: 'Digite um número de código pai'
          },
          submitButton: 'Salvar',
          insertChartOfAccount: 'Inserir'
        }
      }
    },

    domain: {
      errors: {
        selectTransactionTypeAndEntryType:
          'Por favor, selecione o tipo de transação e o tipo de entrada',
        nameAlreadyExists: 'Nome já existe',
        entryAlreadyExists: 'Entrada já existe',
        transactionTypeInUse: 'Tipo de transação em uso'
      },
      title: 'Domínio',
      form: {
        transactionType: {
          title: 'Tipo de Transação',
          submitButton: 'Salvar'
        },
        entryType: {
          title: 'Tipo de Entrada',
          submitButton: 'Salvar'
        },
        transactionEntries: {
          transactionType: 'Tipo de Transação',
          transactionTypePlaceholder: 'Selecione um tipo de transação',
          entryTypePlaceholder: 'Selecione um tipo de entrada',
          entryType: 'Tipo de Entrada',
          submitButton: 'Salvar'
        }
      },
      table: {
        transactionType: {
          name: 'Nome',
          delete: 'Excluir'
        },
        entryType: {
          name: 'Nome',
          delete: 'Excluir'
        },
        transactionEntries: {
          transactionType: 'Tipo de transação',
          entryType: 'Tipo de entrada',
          delete: 'Excluir'
        }
      },
      modal: {
        transactionType: {
          title: 'Excluir Tipo de Transação?',
          confirmButton: 'Confirmar',
          cancelButton: 'Cancelar'
        },
        entryType: {
          title: 'Excluir Tipo de Entrada?',
          confirmButton: 'Confirmar',
          cancelButton: 'Cancelar'
        },
        transactionEntries: {
          title: 'Excluir Relação Tipo de Transação e Tipo de Entrada?',
          confirmButton: 'Confirmar',
          cancelButton: 'Cancelar'
        }
      }
    }
  },
  genial: {
    statement: {
      title: 'Extrato genial',
      form: {
        id: 'Id da conta',
        dateRange: 'Período',
        searchButton: 'Buscar'
      },
      table: {
        date: 'Data/hora',
        transactionType: 'Tipo da transação',
        transactionId: 'Id da transação',
        amount: 'Valor'
      },
      details: {
        id: 'Id',
        external_id: 'Id externo',
        title: 'Detalhes do extrato',
        description: 'Descrição',
        date: 'Data',
        time: 'Tempo',
        transaction_type: 'Tipo de transação',
        detail: 'Detalhes',
        amount: 'Valor',
        metadata: {
          source_psp: 'Psp do pagador',
          source_name: 'Nome do pagador',
          source_document: 'Document do pagador',
          source_account_number: 'Número da conta do pagador',
          destination_psp: 'Psp do recebedor',
          destination_name: 'Nome do recebedor',
          destination_document: 'Document do recebedor',
          destination_account_number: 'Número da conta do recebedor',
          e2e: 'Código E2E',
          authentication: 'Autenticação',
          user_message: 'Mensagem do usuário',
          original_amount: 'Valor original',
          barcode: 'Código de barras'
        }
      }
    }
  },
  operation: {
    authorization: {
      title: 'Autorização',
      table: {
        transactionId: 'ID da Transação',
        transactionType: 'Tipo de Transação',
        currency: 'Moeda',
        amount: 'Valor',
        paramAccountID1: 'ID da Conta Param 1',
        ParamAccountID2: 'ID da Conta Param 2',
        createdAt: 'Criado Em',
        actions: 'Ações'
      },
      newAuthorization: 'Nova Autorização',
      modal: {
        confirmAuthorization: {
          title: 'Confirmar Autorização',
          form: {
            transactionId: 'ID da Transação',
            settledAt: 'Liquidado Em'
          }
        },
        reverseAuthorization: {
          title: 'Reverter Autorização',
          form: {
            transactionId: 'ID da Transação',
            settledAt: 'Liquidado Em'
          }
        },
        success: {
          title: 'Transação Criada',
          transactionId: 'ID da Transação',
          okButton: 'OK'
        },
        title: 'Autorizar',
        form: {
          errors: {
            amountMustBeInCents: 'O valor deve estar em centavos'
          },
          transactionType: 'Tipo de Transação',
          settledAt: 'Liquidado Em',
          currency: 'Moeda',
          amount: 'Valor',
          externalID: 'ID Externo',
          paramAccountID1: 'ID da Conta Param 1',
          paramAccountID2: 'ID da Conta Param 2',
          saveButton: 'Salvar',
          cancelButton: 'Cancelar'
        }
      }
    },
    execution: {
      title: 'Execução',
      newExecution: 'Nova Execução',
      modal: {
        success: {
          title: 'Transação Criada',
          transactionId: 'ID da Transação',
          okButton: 'OK'
        },
        title: 'Executar',
        form: {
          errors: {
            amountMustBeInCents: 'O valor deve estar em centavos'
          },
          transactionType: 'Tipo de Transação',
          settledAt: 'Liquidado Em',
          currency: 'Moeda',
          amount: 'Valor',
          externalID: 'ID Externo',
          paramAccountID1: 'ID da Conta Param 1',
          paramAccountID2: 'ID da Conta Param 2',
          saveButton: 'Salvar',
          cancelButton: 'Cancelar'
        }
      }
    }
  },
  buttons: {
    copy: 'Copiar'
  },
  notFound: {
    title: 'Página não encontrada',
    action: 'Voltar para a Página Inicial'
  },
  login: {
    confirm: 'Entrar'
  },
  form: {
    error: {
      email: 'E-mail inválido',
      required: 'Este campo é obrigatório'
    }
  }
}
