export const enUs = {
  api: {
    errors: {
      createAccount: 'Failed to create account',
      failedToChangeStatus: 'Failed to change status',
      failedToUpdate: 'Failed to update',
      failedToCreateBillingPlan: 'Failed to create billing plan',
      associateCurrency: 'Failed to associate currency',
      failedToCreateAccountRule: 'Failed to create account rule',
      failedToCreateTransaction: 'Failed to create transaction',
      failedFetchingData: 'Failed fetching data',
      failedToCreateExecution: 'Failed to create execution',
      failedToCreateAuthorization: 'Failed to create authorization',
      failedToCreateSplit: 'Failed to create split',
      failedToCreateBalance: 'Failed to create balance',
      failedToCreateUser: 'Failed to create user',
      failedToConfirmTransaction: 'Failed to confirm transaction',
      failedToRevertTransaction: 'Failed to revert transaction',
      sessionExpired: 'Session expired'
    }
  },
  menu: {
    sidebar: {
      settings: {
        title: 'Settings',
        users: 'Users'
      },
      setup: {
        title: 'Setup',
        domain: 'Domain',
        accountRules: 'Account Rules',
        chartOfAccounts: 'Chart of Accounts',
        executionRules: 'Execution Rules',
        authorizationRules: 'Authorization Rules',
        billingPlan: 'Billing Plan'
      },
      register: {
        title: 'Register',
        currencies: 'Currencies',
        accounts: 'Accounts'
      },
      operation: {
        title: 'Operation',
        execution: 'Execution',
        authorization: 'Authorization',
        split: 'Split',
        balanceSheet: 'Balance Sheet'
      },
      core: {
        title: 'Core',
        balance: 'Balance',
        transaction: 'Transaction'
      },
      logout: 'Logout'
    }
  },
  modal: {
    message: {
      title: 'Message',
      ok: 'ok'
    }
  },
  date: {
    dateOnly: 'MM/DD/YYYY'
  },
  commons: {
    fields: {
      true: 'True',
      TRUE: 'TRUE',
      false: 'False',
      FALSE: 'FALSE'
    },
    language: 'Language',
    actions: 'Actions'
  },
  users: {
    title: 'Users',
    modal: {
      changePassword: {
        title: 'Reset Password',
        form: {
          description:
            'You are about to reset this user password. Are you sure?',
          password: 'Password',
          saveButton: 'Confirm',
          cancelButton: 'Cancel'
        },
        success: 'New password: '
      }
    },
    table: {
      id: 'ID',
      name: 'Name',
      email: 'Email',
      role: 'role',
      status: 'Status',
      createdAt: 'Created At'
    },

    form: {
      insertButton: 'Insert',
      name: 'Name',
      email: 'Email',
      role: 'Role',
      password: 'Password',
      missingField: 'Please fill all fields!'
    }
  },
  core: {
    balance: {
      title: 'Balance',
      modal: {
        newBalance: 'New Balance Created',
        balanceID: 'Balance ID'
      },
      form: {
        currency: 'Currency',
        id: 'ID',
        searchButton: 'Search',
        newBalanceButton: 'New Balance',
        journalButton: 'Journal',
        amount: 'Amount',
        seqNum: 'Seq Num',
        createdAt: 'Created At'
      }
    },
    transaction: {
      title: 'Transaction',
      newTransactionButton: 'New Transaction',
      form: {
        id: 'ID',
        type: 'Type',
        currency: 'Currency',
        amount: 'Amount',
        createdAt: 'Created At',
        searchButton: 'Search',
        resetButton: 'Reset'
      },
      modal: {
        newTransaction: {
          title: 'New Transaction',
          modal: {
            title: 'Transaction Created',
            transactionId: 'Transaction ID',
            okButton: 'OK'
          },
          table: {
            transactionType: 'Transaction Type',
            settledAt: 'Settled At',
            parentTransactionID: 'Parent Transaction ID',
            externalId: 'External ID',
            entryType: 'Entry Type',
            entryOrder: 'Entry Order',
            currency: 'Currency',
            amount: 'Amount',
            debitBalanceId: 'Debit Balance ID',
            debitBalanceValidation: 'Debit Validation',
            creditBalanceID: 'Credit Balance ID',
            creditBalanceValidation: 'Credit Validation'
          },
          form: {
            transactionType: 'Transaction Type',
            settledAt: 'Settled At',
            parentTransactionID: 'Parent Transaction ID',
            externalId: 'External ID',
            entryType: 'Entry Type',
            entryOrder: 'Entry Order',
            currency: 'Currency',
            amount: 'Amount',
            debitBalanceId: 'Debit Balance ID',
            debitBalanceValidation: 'Debit Balance Validation',
            creditBalanceID: 'Credit Balance ID',
            creditBalanceValidation: 'Credit Balance Validation',
            insertButton: 'Insert',
            saveButton: 'Save',
            cancelButton: 'Cancel',
            modal: {
              transactionCreated: {
                title: 'Transaction Created',
                transactionId: 'Transaction ID',
                okButton: 'OK'
              }
            }
          }
        },
        entry: {
          title: 'Entries',
          id: 'ID',
          transactionId: 'Transaction ID',
          transactionType: 'Transaction Type',
          order: 'Order',
          type: 'Type',
          currency: 'Currency',
          amount: 'Amount',
          debitBalanceId: 'Debit Balance ID',
          debitBalanceAfter: 'Debit Balance After',
          debitBalanceSeqNum: 'Debit Balance Seq Num',
          creditBalanceId: 'Credit Balance ID',
          creditBalanceAfter: 'Credit Balance After',
          creditBalanceSeqNum: 'Credit Balance Seq Num',
          createdAt: 'Created At',
          settledAt: 'Settled At',
          parentTransactionId: 'Parent Transaction ID',
          externalID: 'External ID',
          closeButton: 'Close'
        }
      },
      table: {
        id: 'ID',
        type: 'Type',
        currency: 'Currency',
        amount: 'Amount',
        createdAt: 'Created At',
        externalID: 'External ID',
        parentId: 'Parent ID'
      }
    }
  },
  register: {
    account: {
      pages: {
        balanceJournal: {
          title: 'Balance Journal',
          accountBalance: 'Account Balance',
          form: {
            searchButton: 'Search',
            balanceID: 'Balance ID',
            currency: 'Currency',
            period: 'Period'
          },
          table: {
            createdAt: 'Created At',
            transactionType: 'Transaction Type',
            entryType: 'Entry Type',
            externalID: 'External ID',
            amount: 'Amount',
            balanceAfter: 'Balance After',
            seqNum: 'Seq Num',
            details: 'Details'
          },
          exportButton: 'Export'
        },
        accountBalance: {
          title: 'Account Balance',
          associateCurrencyButton: 'Associate Currency',
          form: {
            accountID: 'Account ID',
            accountDescription: 'Account Description',
            accountType: 'Account Type',
            accountCodeNumber: 'Account Code Number',
            billingPlan: 'Billing Plan'
          },
          table: {
            balanceId: 'Balance ID',
            balanceType: 'Balance Type',
            currency: 'Currency',
            amount: 'Amount',
            seqNum: 'Seq Num',
            createdAt: 'Created At',
            journal: 'Journal'
          }
        }
      },
      form: {
        id: 'ID',
        description: 'Description',
        type: 'Type',
        codeNumber: 'Code Number',
        billingPlan: 'Billing Plan',
        searchButton: 'Search',
        resetButton: 'Reset'
      },
      modal: {
        accountCreated: {
          title: 'Account Created',
          label: 'Account ID',
          okButton: 'OK'
        },
        changeAccountBillingPlan: {
          title: 'Change Account Billing Plan',
          form: {
            accountID: 'Account ID',
            billingPlan: 'Billing Plan',
            saveButton: 'Save',
            cancelButton: 'Cancel'
          }
        },
        associateCurrency: {
          form: {
            accountID: 'Account ID',
            currency: 'Currency',
            insertButton: 'Insert',
            table: {
              remove: 'Remove',
              currency: 'Currency'
            },
            saveButton: 'Save',
            cancelButton: 'Cancel'
          }
        },
        journalDetails: {
          title: 'Journal Details',
          table: {
            field: 'Field',
            value: 'Value',
            fields: {
              id: 'ID',
              balance_id: 'Balance ID',
              type: 'Type',
              transaction_id: 'Transaction ID',
              transaction_type: 'Transaction Type',
              entry_id: 'Entry ID',
              entry_type: 'Entry Type',
              entry_order: 'Entry Order',
              currency: 'Currency',
              amount: 'Amount',
              balance_after: 'Balance After',
              seq_num: 'Seq Num',
              settled_at: 'Settled At',
              created_at: 'Created At',
              parent_transaction_id: 'Parent Transaction ID',
              external_id: 'External ID'
            },
            closeButton: 'Close'
          }
        },
        newAccount: {
          error: {
            currencyAlreadyAdded: 'Currency already added',
            accountNotCreated: 'Account not created'
          },
          title: 'New Account',
          description: 'Description',
          billingPlan: 'Billing Plan',
          currency: 'Currency',
          insertButton: 'Insert',
          table: {
            currency: 'Currency',
            remove: 'Remove'
          },
          createButton: 'Create',
          cancelButton: 'Cancel'
        }
      },
      title: 'Account',
      newAccount: 'New Account',
      table: {
        id: 'ID',
        description: 'Description',
        type: 'Type',
        codeNumber: 'Code Number',
        billingPlan: 'Billing Plan',
        createdAt: 'Created At',
        actions: 'Actions'
      }
    },
    currency: {
      table: {
        code: 'Code',
        name: 'Name',
        decimals: 'Decimals',
        createdAt: 'Created At'
      },
      newCurrency: 'New Currency',
      title: 'Currency',
      modal: {
        newCurrency: {
          title: 'New Currency',
          form: {
            code: 'Code',
            name: 'Name',
            decimals: 'Decimals',
            confirmButton: 'Confirm',
            cancelButton: 'Cancel'
          }
        }
      }
    }
  },
  setup: {
    billingPlan: {
      errors: {
        failedToCreateBillingPlan: 'Failed to create billing plan'
      },
      title: 'Billing Plan',
      newPlan: 'New Plan',
      table: {
        billingPlan: {
          id: 'ID',
          name: 'Name',
          createdAt: 'Created At',
          details: 'Details'
        }
      },
      modal: {
        newBillingPlanTitle: 'New Billing Plan',
        billingPlanDetailsTitle: 'Billing Plan',
        form: {
          errors: {
            decimalMustBeANumber: 'Decimal must be a number',
            nameMustBeFilled: 'Name must be filled',
            transactionsMustBeFilled: 'Transactions must be filled'
          },
          name: 'Name',
          decimals: 'Decimals',
          transactionType: 'Transaction Type',
          entryType: 'Entry Type',
          amountType: {
            title: 'Amount Type',
            value: 'Value',
            percentage: 'Percentage'
          },
          amount: 'Amount',
          insertButton: 'Insert',
          saveButton: 'Save',
          cancelButton: 'Cancel',
          closeButton: 'Close',
          deleteButton: 'Delete'
        },
        table: {
          transactionType: 'Transaction Type',
          entryType: 'Entry Type',
          amountType: 'Amount Type',
          amount: 'Amount',
          remove: 'Remove'
        },
        created: {
          title: 'Billing Plan Created',
          label: 'Billing Plan ID',
          okButton: 'OK'
        }
      }
    },
    authorizationRules: {
      title: 'Authorization Rules',
      newRule: 'New Rule',
      table: {
        authorizationRules: {
          transactionType: 'Transaction Type',
          paramAccount1: 'Param Account 1',
          paramAccount2: 'Param Account 2',
          details: 'Details'
        }
      },
      modal: {
        authorizationRuleDetails: {
          errors: {
            entryAlreadyExists: 'Entry already exists'
          },
          title: 'Authorization Rule Details',
          form: {
            authorizationFormTitle: 'Authorization',
            confirmationFormTitle: 'Confirmation',
            transactionType: 'Transaction Type',
            paramAccount1: 'Param Account 1',
            paramAccount2: 'Param Account 2',
            entryType: 'Entry Type',
            entryOrder: 'Entry Order',
            debitAccountSource: 'Debit Account Source',
            debitAccountDescription: 'Debit Account Description',
            debitBalanceType: 'Debit Balance Type',
            debitBalanceValidation: 'Debit Balance Validation',
            creditAccountSource: 'Credit Account Source',
            creditAccountDescription: 'Credit Account Description',
            creditBalanceType: 'Credit Balance Type',
            creditBalanceValidation: 'Credit Balance Validation',
            insertButton: 'Insert',
            modal: {
              title: 'Delete Authorization Rule?',
              confirmButton: 'Confirm',
              cancelButton: 'Cancel'
            }
          },
          table: {
            entryType: 'Entry Type',
            entryOrder: 'Entry Order',
            debitAccountSource: 'Debit Account Source',
            debitAccountDescription: 'Debit Account Description',
            debitBalanceType: 'Debit Balance Type',
            debitBalanceValidation: 'Debit Balance Validation',
            creditAccountSource: 'Credit Account Source',
            creditAccountDescription: 'Credit Account Description',
            creditBalanceType: 'Credit Balance Type',
            creditBalanceValidation: 'Credit Balance Validation'
          },
          deleteButton: 'Delete',
          saveButton: 'Save',
          cancelButton: 'Cancel'
        },
        newAuthorizationRule: {
          title: 'New Authorization Rule',
          form: {
            authorizationFormTitle: 'Authorization',
            confirmationFormTitle: 'Confirmation',
            transactionType: 'Transaction Type',
            paramAccount1: 'Param Account 1',
            paramAccount2: 'Param Account 2',
            entryType: 'Entry Type',
            entryOrder: 'Entry Order',
            debitAccountSource: 'Debit Account Source',
            debitAccountDescription: 'Debit Account Description',
            debitBalanceType: 'Debit Balance Type',
            debitBalanceValidation: 'Debit Balance Validation',
            creditAccountSource: 'Credit Account Source',
            creditAccountDescription: 'Credit Account Description',
            creditBalanceType: 'Credit Balance Type',
            creditBalanceValidation: 'Credit Balance Validation',
            insertButton: 'Insert',
            updateButton: 'Update',
            errors: {
              confirmationEntryOrderMustBeInSequence:
                'Confirmation entry order must be in sequence',
              authorizationEntryOrderMustBeInSequence:
                'Authorization entry order must be in sequence'
            }
          },
          table: {
            transactionType: 'Transaction Type',
            paramAccount1: 'Param Account 1',
            paramAccount2: 'Param Account 2',
            entryType: 'Entry Type',
            entryOrder: 'Entry Order',
            debitAccountSource: 'Debit Account Source',
            debitAccountDescription: 'Debit Account Description',
            debitBalanceType: 'Debit Balance Type',
            debitBalanceValidation: 'Debit Balance Validation',
            creditAccountSource: 'Credit Account Source',
            creditAccountDescription: 'Credit Account Description',
            creditBalanceType: 'Credit Balance Type',
            creditBalanceValidation: 'Credit Balance Validation',
            remove: 'Remove'
          },
          saveButton: 'Save',
          cancelButton: 'Cancel'
        }
      }
    },
    accountRules: {
      title: 'Account Rules',
      table: {
        accountRules: {
          description: 'Description',
          unique: 'Unique',
          availableBalance: 'Available Balance',
          pendingBalance: 'Pending Balance',
          blockedBalance: 'Blocked Balance',
          remove: 'Remove'
        }
      },
      modal: {
        errors: {
          selectTransactionTypeAndEntryType:
            'Please select transaction and entry type',
          accountRuleAlreadyExists: 'Account rule already exists',
          descriptionAlreadyExists: 'Description already exists'
        },
        title: 'Delete Account Rule?',
        confirmButton: 'Confirm',
        cancelButton: 'Cancel'
      },
      form: {
        accountRules: {
          description: {
            title: 'Description',
            placeholder: 'Enter a description'
          },
          unique: {
            title: 'Unique',
            true: 'TRUE',
            false: 'FALSE'
          },
          balanceType: {
            title: 'Balance Type',
            available: 'Available',
            pending: 'Pending',
            blocked: 'Blocked'
          },
          insertRule: 'Insert Rule',
          submitButton: 'Save'
        }
      }
    },
    executionRules: {
      title: 'Execution Rules',
      newRule: 'New Rule',
      errors: {
        exectutionRuleAlreadyExists: 'Execution rule already exists',
        entryOrderMustBeInSequence: 'Entry order must be in sequence'
      },
      table: {
        executionRules: {
          transactionType: 'Transaction Type',
          paramAccount1: 'Param Account 1',
          paramAccount2: 'Param Account 2',
          details: 'Details'
        }
      },
      modal: {
        executionRuleDetails: {
          title: 'Execution Rule Details',
          form: {
            transactionType: 'Transaction Type',
            paramAccount1: 'Param Account 1',
            paramAccount2: 'Param Account 2',
            entryType: 'Entry Type',
            entryOrder: 'Entry Order',
            debitAccountSource: 'Debit Account Source',
            debitAccountDescription: 'Debit Account Description',
            debitBalanceType: 'Debit Balance Type',
            debitBalanceValidation: 'Debit Balance Validation',
            creditAccountSource: 'Credit Account Source',
            creditAccountDescription: 'Credit Account Description',
            creditBalanceType: 'Credit Balance Type',
            creditBalanceValidation: 'Credit Balance Validation',
            insertButton: 'Insert',
            modal: {
              title: 'Delete Execution Rule?',
              confirmButton: 'Confirm',
              cancelButton: 'Cancel'
            }
          },
          table: {
            entryType: 'Entry Type',
            entryOrder: 'Entry Order',
            debitAccountSource: 'Debit Account Source',
            debitAccountDescription: 'Debit Account Description',
            debitBalanceType: 'Debit Balance Type',
            debitBalanceValidation: 'Debit Balance Validation',
            creditAccountSource: 'Credit Account Source',
            creditAccountDescription: 'Credit Account Description',
            creditBalanceType: 'Credit Balance Type',
            creditBalanceValidation: 'Credit Balance Validation'
          },
          deleteButton: 'Delete',
          saveButton: 'Save',
          cancelButton: 'Cancel'
        },
        newExecutionRule: {
          title: 'New Execution Rule',
          form: {
            transactionType: 'Transaction Type',
            paramAccount1: 'Param Account 1',
            paramAccount2: 'Param Account 2',
            entryType: 'Entry Type',
            entryOrder: 'Entry Order',
            debitAccountSource: 'Debit Account Source',
            debitAccountDescription: 'Debit Account Description',
            debitBalanceType: 'Debit Balance Type',
            debitBalanceValidation: 'Debit Balance Validation',
            creditAccountSource: 'Credit Account Source',
            creditAccountDescription: 'Credit Account Description',
            creditBalanceType: 'Credit Balance Type',
            creditBalanceValidation: 'Credit Balance Validation',
            insertButton: 'Insert',
            updateButton: 'Update'
          },
          table: {
            transactionType: 'Transaction Type',
            paramAccount1: 'Param Account 1',
            paramAccount2: 'Param Account 2',
            entryType: 'Entry Type',
            entryOrder: 'Entry Order',
            debitAccountSource: 'Debit Account Source',
            debitAccountDescription: 'Debit Account Description',
            debitBalanceType: 'Debit Balance Type',
            debitBalanceValidation: 'Debit Balance Validation',
            creditAccountSource: 'Credit Account Source',
            creditAccountDescription: 'Credit Account Description',
            creditBalanceType: 'Credit Balance Type',
            creditBalanceValidation: 'Credit Balance Validation',
            remove: 'Remove'
          },
          saveButton: 'Save',
          cancelButton: 'Cancel'
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
          description: 'Description',
          balanceType: 'Balance Type',
          accountType: 'Account Type',
          codeNumber: 'Code Number',
          parentCodeNumber: 'Parent Code Number',
          remove: 'Remove'
        }
      },
      form: {
        chartOfAccounts: {
          description: {
            title: 'Description',
            placeholder: 'Enter a description'
          },
          balanceType: {
            title: 'Balance Type',
            placeholder: 'Select a balance type',
            options: {
              available: 'Available',
              pending: 'Pending',
              blocked: 'Blocked'
            }
          },
          type: {
            title: 'Type',
            placeholder: 'Select a type',
            options: {
              asset: 'Asset',
              liability: 'Liability',
              equity: 'Equity',
              revenue: 'Revenue',
              expense: 'Expense'
            }
          },
          codeNumber: {
            title: 'Code Number',
            placeholder: 'Enter a code number'
          },
          parentCodeNumber: {
            title: 'Parent Code Number',
            placeholder: 'Enter a parent code number'
          },
          submitButton: 'Save',
          insertChartOfAccount: 'Insert'
        }
      }
    },
    domain: {
      errors: {
        selectTransactionTypeAndEntryType:
          'Please select transaction and entry type',
        nameAlreadyExists: 'Name already exists',
        entryAlreadyExists: 'Entry already exists',
        transactionTypeInUse: 'Transaction type in use'
      },
      title: 'Domain',
      form: {
        transactionType: {
          title: 'Transaction Type',
          submitButton: 'Save'
        },
        entryType: {
          title: 'Entry Type',
          submitButton: 'Save'
        },
        transactionEntries: {
          transactionType: 'Transaction Type',
          transactionTypePlaceholder: 'Select a transaction type',
          entryTypePlaceholder: 'Select an entry type',
          entryType: 'Entry Type',
          submitButton: 'Save'
        }
      },

      table: {
        transactionType: {
          name: 'Name',
          delete: 'Delete'
        },
        entryType: {
          name: 'Name',
          delete: 'Delete'
        },
        transactionEntries: {
          transactionType: 'Transaction type',
          entryType: 'Entry type',
          delete: 'Delete'
        }
      },
      modal: {
        transactionType: {
          title: 'Delete Transaction Type?',
          confirmButton: 'Confirm',
          cancelButton: 'Cancel'
        },

        entryType: {
          title: 'Delete Entry Type?',
          confirmButton: 'Confirm',
          cancelButton: 'Cancel'
        },
        transactionEntries: {
          title: 'Delete Transaction Type Entry Type Relation?',
          confirmButton: 'Confirm',
          cancelButton: 'Cancel'
        }
      }
    }
  },

  operation: {
    balanceSheet: {
      title: 'Balance Sheet & Income Statement',
      form: {
        currency: 'Currency',
        searchButton: 'Search'
      },
      table: {
        totalBalance: 'Total Balance',
        titles: {
          asset: 'Asset',
          liability: 'Liability',
          equity: 'Equity',
          expense: 'Expense',
          revenue: 'Revenue',
          unmapped: 'Unmapped'
        },
        fields: {
          code: 'Code',
          accountDescription: 'Account Description',
          balanceType: 'Balance Type',
          amount: 'Amount'
        }
      }
    },
    authorization: {
      title: 'Authorization',
      table: {
        transactionId: 'Transaction ID',
        transactionType: 'Transaction Type',
        currency: 'Currency',
        amount: 'Amount',
        paramAccountID1: 'Param Account ID 1',
        ParamAccountID2: 'Param Account ID 2',
        createdAt: 'Created At',
        actions: 'Actions'
      },
      newAuthorization: 'New Authorization',
      modal: {
        confirmAuthorization: {
          title: 'Confirm Authorization',
          form: {
            transactionId: 'Transaction ID',
            settledAt: 'Settled At'
          }
        },
        reverseAuthorization: {
          title: 'Reverse Authorization',
          form: {
            transactionId: 'Transaction ID',
            settledAt: 'Settled At'
          }
        },
        success: {
          title: 'Transaction Created',
          transactionId: 'Transaction ID',
          okButton: 'OK'
        },
        title: 'Authorize',
        form: {
          errors: {
            amountMustBeInCents: 'Amount must be in cents'
          },
          transactionType: 'Transaction Type',
          settledAt: 'Settled At',
          currency: 'Currency',
          amount: 'Amount',
          externalID: 'External ID',
          paramAccountID1: 'Param Account ID 1',
          paramAccountID2: 'Param Account ID 2',
          saveButton: 'Save',
          cancelButton: 'Cancel'
        }
      }
    },
    split: {
      title: 'Split',
      newSplit: 'New Split',
      modal: {
        form: {
          transactionType: 'Transaction Type',
          settledAt: 'Settled At',
          currency: 'Currency',
          amount: 'Amount',
          externalID: 'External ID',
          sourceAccountID: 'Source Account ID',
          insertButton: 'Insert',
          sourceBalanceValidation: 'Source Balance Validation',
          accountIDDestination: 'Account ID Destination',
          table: {
            accountID: 'Account ID',
            amount: 'Amount',
            remove: 'Remove'
          },
          saveButton: 'Save',
          cancelButton: 'Cancel'
        }
      }
    },
    execution: {
      title: 'Execution',
      newExecution: 'New Execution',
      modal: {
        success: {
          title: 'Transaction Created',
          transactionId: 'Transaction ID',
          okButton: 'OK'
        },
        title: 'Execute',
        form: {
          errors: {
            amountMustBeInCents: 'Amount must be in cents'
          },
          transactionType: 'Transaction Type',
          settledAt: 'Settled At',
          currency: 'Currency',
          amount: 'Amount',
          externalID: 'External ID',
          paramAccountID1: 'Param Account ID 1',
          paramAccountID2: 'Param Account ID 2',
          saveButton: 'Save',
          cancelButton: 'Cancel'
        }
      }
    }
  },
  buttons: {
    copy: 'Copy'
  },
  notFound: {
    title: 'Not found page',
    action: 'Go to home page'
  },
  login: {
    confirm: 'Sign In'
  }
}
